---
title: Penetration Testing with Open Source
description: Overview of Cars Hacking, testing & Setup.
image: /posts/penetration-testing/car_hacking.png 
alt: Penetration Testing.
publishedAt: 2021-08-12
tags: 
    - Electronic 
    - Testing
    - Penetration Testing.
tweet: https://twitter.com/chemistdev
---

# Automotive Penetration Testing 

Connected cars and its numerous interfaces are usually well-prepared to fend off cyberattacks. Automotive security in general requires identify and check vulnerabilities targets in order to derive counter-measures. Frequent vulnerabilities can be found on: 

* Electronic Control Units (ECU)
    * HW based attacks on PCB manipulation bypass or diagnostics 
* Interfaces infraestructures 
    * Communication protocols via CAN bus or UDS network units. Media interfaces like USB, Ethernet, WiFi, Bluetooth, SD cards. 
* Backed of Web Applications 
    * SW based car Apps through 3rd party services (iOS/Android) 

Internal structure of the cars have a simplified topology with CAN-Bus where every ECUs can talk to any other. In middle class cars we have gateway ECUs with separate communications CAN domains for infotainment ECUs and all for Powertrain and Engines. In most modern cars are Automotive Ethernet with gateway ECU with connections and routers to switches to change the massages routing to main controllers and subscribe data from one network to anohter through other configuration. 

Automotive diagnostics protocol stack are CAN based and IEEE 802.3 based networks: 
* CAN uses the ISO-TP to send data packets of messages that exceed 8 Bytes up to 4095 Bytes. The application used are OBD (Onboard) and UDS (Offline).
* IEEE 802.3 uses the DoIP via wired Ethernet to send data covering up to 10Mbps with the same applications as CAN

CAN is mainly used for exchanging process data via XML files, while IP-SD exchange process data via IP. There are many open sources tools like Nmap or Wireshark for Ethernet protocolls. In the pass, multiple car-hacking tools were available but limited, not maintainable, only supported by specific OS, not extendable due to understandable software architecture with thousands of files.

After checking the evolution of all the available open source tools, there are few of them based on Python that are very well documented and works for all existing OS

## Conclusion
Securing vehicles is not an easy task, but there are free Open Sources out there. If it does not work, try reverse engineering :)  


```python 
def test_xyz_scan(reset_ecus, interface):
   log_interactive.setLevel(logging.DEBUG)
   keyfunction = securityAccess_Algorithm0
   s = GMLAN_Scanner(socket, reset_handler=reset_ecus,
   xyz_CA1Enumerator_kwargs={"keyfunction": keyfunction},
   verborrea=True, timeout=1, dynamic_timeout=False)

def exploit_payload = dhx(40 f6 5d ff)
def test_code_execution(reset_ecus, interface)
   s.scan()
for x in s.enumerators:
   x.show()
   s.get_state_paths()

   if XPS_TransferPayload(arm_s, socket=allnode1_s.
    timeout=5, retry=2, verborrea=False)
    print("DONE")
```

!['Arduino'](https://source.unsplash.com/dacmWVUmux4)