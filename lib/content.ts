import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { marked } from 'marked'

const root = process.cwd()
const contentDir = path.join(root, 'content')
const publicDir = path.join(root, 'public')

export type Link = {
  title: string
  url?: string | null
}

export type Project = {
  slug: string
  title: string
  img?: string
  alt?: string
  prio: number
  status: number
  links: Link[]
  responsibilities: string[]
  html: string
  excerpt: string
}

export type Post = {
  slug: string
  title: string
  description?: string
  image?: string
  alt?: string
  publishedAt?: string
  tags: string[]
  html: string
}

export type ListEntry = {
  title: string
  description?: string
  logo?: string
  url?: string | null
}

export type UseList = {
  slug: string
  title: string
  description?: string
  image?: string
  hideLogos?: boolean
  entries: ListEntry[]
}

type MarkdownData = Record<string, unknown>

function readFile(relativePath: string) {
  return fs.readFileSync(path.join(contentDir, relativePath), 'utf8')
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.(md|ya?ml)$/i, '')
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback
}

function asPublicAsset(value: unknown) {
  const assetPath = asString(value)
  if (!assetPath || !assetPath.startsWith('/')) return assetPath
  return fs.existsSync(path.join(publicDir, assetPath.slice(1))) ? assetPath : ''
}

function asNumber(value: unknown, fallback = 0) {
  return typeof value === 'number' ? value : Number(value) || fallback
}

function asLinks(value: unknown): Link[] {
  if (!Array.isArray(value)) return []
  return value.reduce<Link[]>((links, item) => {
    if (!item || typeof item !== 'object') return links
    const link = item as Record<string, unknown>
    const title = asString(link.title)
    if (!title) return links
    links.push({
      title,
      url: asString(link.url, ''),
    })
    return links
  }, [])
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : []
}

function renderMarkdown(markdown: string) {
  return marked.parse(markdown, { async: false }) as string
}

function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#>*_`[\]()!-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function readMarkdownCollection(folder: 'projects' | 'posts') {
  const dir = path.join(contentDir, folder)
  return fs
    .readdirSync(dir)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const source = fs.readFileSync(path.join(dir, filename), 'utf8')
      const parsed = matter(source)
      return {
        slug: slugFromFilename(filename),
        data: parsed.data as MarkdownData,
        body: parsed.content,
      }
    })
}

export function getProjects(): Project[] {
  return readMarkdownCollection('projects')
    .map(({ slug, data, body }) => ({
      slug,
      title: asString(data.title, slug),
      img: asPublicAsset(data.img),
      alt: asString(data.alt),
      prio: asNumber(data.prio),
      status: asNumber(data.status, 2),
      links: asLinks(data.links),
      responsibilities: asStringArray(data.responsibilities),
      html: renderMarkdown(body),
      excerpt: stripMarkdown(body).slice(0, 180),
    }))
    .sort((a, b) => b.prio - a.prio)
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug)
}

export function getPosts(): Post[] {
  return readMarkdownCollection('posts')
    .map(({ slug, data, body }) => ({
      slug,
      title: asString(data.title, slug),
      description: asString(data.description),
      image: asPublicAsset(data.image),
      alt: asString(data.alt),
      publishedAt: asString(data.publishedAt),
      tags: asStringArray(data.tags),
      html: renderMarkdown(body),
    }))
    .sort((a, b) => {
      return (
        new Date(b.publishedAt || 0).getTime() -
        new Date(a.publishedAt || 0).getTime()
      )
    })
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug)
}

export function getUseLists(): UseList[] {
  const dir = path.join(contentDir, 'lists')
  return fs
    .readdirSync(dir)
    .filter((filename) => /\.ya?ml$/i.test(filename))
    .map((filename) => {
      const data = yaml.load(fs.readFileSync(path.join(dir, filename), 'utf8')) as
        | Record<string, unknown>
        | undefined
      const entries = Array.isArray(data?.entries)
        ? (data.entries as Array<Record<string, unknown>>).map((entry) => ({
            title: asString(entry.title),
            description: asString(entry.description),
            logo: asPublicAsset(entry.logo),
            url: asString(entry.url, ''),
          }))
        : []
      return {
        slug: slugFromFilename(filename),
        title: asString(data?.title, slugFromFilename(filename)),
        description: asString(data?.description),
        image: asPublicAsset(data?.image),
        hideLogos: Boolean(data?.hideLogos),
        entries,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export function getUseList(slug: string) {
  return getUseLists().find((list) => list.slug === slug)
}

export function getCv() {
  return {
    information: JSON.parse(readFile('cv/information.json')),
    segments: JSON.parse(readFile('cv/segments.json')),
    skills: JSON.parse(readFile('cv/skills.json')),
    settings: JSON.parse(readFile('cv/settings.json')),
  }
}

export function formatDate(value?: string) {
  if (!value) return ''
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(value))
}
