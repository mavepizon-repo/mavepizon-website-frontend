// ✅ Order matters here: this is the exact display order on the IT Services page
// (Web Development first ... AI last)
export const services = [
  {
    id: 1,
    title: "Web Development",
    iconClass: "bi bi-globe",
    icon: "🌐",
    description: "Responsive, scalable web apps built with modern frontend & backend stacks.",
    projectCategory: "Web Development",
    bg: ["#0ea5e9", "#38bdf8"],
    stack: {
      type: "groups",
      groups: [
        { label: "Frontend", items: ["React.js", "Next.js"] },
        { label: "Backend", items: ["Node.js", "Express.js", "Spring Boot"] }
      ]
    }
  },
  {
    id: 2,
    title: "Mobile App Development",
    iconClass: "bi bi-phone",
    icon: "📱",
    description: "Cross-platform Android & iOS apps with smooth, native-like performance.",
    projectCategory: "Mobile App Development",
    bg: ["#8b5cf6", "#7c3aed"],
    stack: {
      type: "groups",
      groups: [
        { label: "Frontend", items: ["Flutter", "Riverpod"] },
        { label: "Backend", items: ["Node.js", "Spring Boot"] }
      ]
    }
  },
  {
    id: 3,
    title: "DevOps",
    iconClass: "bi bi-diagram-3",
    icon: "⚙️",
    description: "CI/CD pipelines, automation & infrastructure management done right.",
    projectCategory: "DevOps",
    bg: ["#059669", "#047857"],
    stack: {
      type: "flat",
      items: [
        "Linux",
        "Git/GitHub",
        "Docker",
        "Jenkins",
        "Nginx",
        "Nexus",
        "Ansible",
        "Terraform",
        "Prometheus",
        "Grafana",
        "Loki"
      ]
    }
  },
  {
    id: 4,
    title: "Cyber Security",
    iconClass: "bi bi-shield-lock",
    icon: "🛡️",
    description: "Protecting systems & networks with modern security tooling.",
    projectCategory: "Cyber Security",
    bg: ["#ef4444", "#dc2626"],
    stack: {
      type: "flat",
      items: [
        "OWASP",
        "Nmap",
        "Wireshark",
        "Burp Suite",
        "Wazuh",
        "Suricata",
        "pfSense/OPNsense",
        "Keycloak",
        "Trivy",
        "SonarQube"
      ]
    }
  },
  {
    id: 5,
    title: "Blockchain",
    iconClass: "bi bi-link-45deg",
    icon: "⛓️",
    description: "Decentralized apps & smart contracts built on trusted chains.",
    projectCategory: "Blockchain",
    bg: ["#f59e0b", "#d97706"],
    stack: {
      type: "flat",
      items: [
        "Ethereum",
        "Solidity",
        "Hardhat/Foundry",
        "Ethers.js",
        "MetaMask",
        "IPFS",
        "Hyperledger Fabric"
      ]
    }
  },
  {
    id: 6,
    title: "IoT",
    iconClass: "bi bi-cpu",
    icon: "📡",
    description: "Connected embedded devices & industrial monitoring solutions.",
    projectCategory: "IoT",
    bg: ["#0284c7", "#0369a1"],
    stack: {
      type: "flat",
      items: [
        "Embedded C/C++",
        "ESP32/STM32",
        "UART/SPI/I2C",
        "RS-485",
        "Modbus",
        "MQTT",
        "Raspberry Pi / Industrial Gateway",
        "ThingsBoard",
        "InfluxDB",
        "Grafana"
      ]
    }
  }
];