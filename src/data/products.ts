import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "AMD Ryzen 9 5900X",
    category: "CPU",
    price: 399.99,
    image: "https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "12-core, 24-thread processor with a base clock of 3.7GHz and boost up to 4.8GHz. Perfect for high-end gaming and content creation.",
    specs: {
      "Cores": "12",
      "Threads": "24",
      "Base Clock": "3.7 GHz",
      "Boost Clock": "4.8 GHz",
      "TDP": "105W",
      "Socket": "AM4"
    },
    stock: 15,
    rating: 4.9,
    featured: true
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 4080",
    category: "GPU",
    price: 1199.99,
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "High-performance graphics card with 16GB GDDR6X memory. Experience ray-tracing and AI-enhanced graphics for the ultimate gaming experience.",
    specs: {
      "Memory": "16GB GDDR6X",
      "CUDA Cores": "9728",
      "Boost Clock": "2.51 GHz",
      "Ray Tracing Cores": "76",
      "Power Consumption": "320W"
    },
    stock: 8,
    rating: 4.8,
    featured: true
  },
  {
    id: 3,
    name: "Corsair Vengeance RGB Pro 32GB",
    category: "RAM",
    price: 159.99,
    image: "https://images.pexels.com/photos/5483073/pexels-photo-5483073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "High-performance DDR4 memory with RGB lighting, optimized for gaming and multitasking.",
    specs: {
      "Capacity": "32GB (2x16GB)",
      "Speed": "3600MHz",
      "CAS Latency": "18",
      "Voltage": "1.35V",
      "RGB": "Yes"
    },
    stock: 25,
    rating: 4.7
  },
  {
    id: 4,
    name: "ASUS ROG Strix Z690-E Gaming",
    category: "Motherboard",
    price: 469.99,
    image: "https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Premium Intel Z690 ATX gaming motherboard with PCIe 5.0, DDR5 memory support, and advanced cooling options.",
    specs: {
      "Chipset": "Intel Z690",
      "Socket": "LGA 1700",
      "Memory Support": "DDR5",
      "Max Memory": "128GB",
      "PCIe Slots": "PCIe 5.0 x16, PCIe 4.0 x16",
      "Form Factor": "ATX"
    },
    stock: 12,
    rating: 4.6
  },
  {
    id: 5,
    name: "Samsung 980 PRO 2TB",
    category: "Storage",
    price: 279.99,
    image: "https://images.pexels.com/photos/6587871/pexels-photo-6587871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Ultra-fast NVMe SSD with PCIe 4.0 interface. Sequential reads up to 7,000 MB/s for lightning-fast load times.",
    specs: {
      "Capacity": "2TB",
      "Interface": "PCIe 4.0 x4, NVMe 1.3c",
      "Sequential Read": "7,000 MB/s",
      "Sequential Write": "5,100 MB/s",
      "Form Factor": "M.2 2280"
    },
    stock: 18,
    rating: 4.9
  },
  {
    id: 6,
    name: "Corsair RM850x",
    category: "Power Supply",
    price: 144.99,
    image: "https://images.pexels.com/photos/6481737/pexels-photo-6481737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Fully modular power supply with 80 PLUS Gold certification. Features low-noise operation and premium components.",
    specs: {
      "Wattage": "850W",
      "Certification": "80 PLUS Gold",
      "Modularity": "Fully Modular",
      "Cooling": "135mm Fan",
      "Dimensions": "150mm x 86mm x 160mm"
    },
    stock: 20,
    rating: 4.8
  },
  {
    id: 7,
    name: "NZXT H510 Elite",
    category: "Case",
    price: 149.99,
    image: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Premium mid-tower case with tempered glass panels, RGB lighting, and excellent cable management.",
    specs: {
      "Form Factor": "Mid-Tower",
      "Motherboard Support": "Mini-ITX, MicroATX, ATX",
      "Front I/O": "USB 3.1 Type-C, USB 3.1 Type-A",
      "Dimensions": "H: 460mm, W: 210mm, D: 428mm",
      "Fans Included": "2x 140mm RGB Front, 1x 120mm Top, 1x 120mm Rear"
    },
    stock: 14,
    rating: 4.5
  },
  {
    id: 8,
    name: "NZXT Kraken X73",
    category: "Cooling",
    price: 179.99,
    image: "https://images.pexels.com/photos/6481607/pexels-photo-6481607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "360mm all-in-one liquid CPU cooler with RGB lighting and advanced controls for optimal cooling performance.",
    specs: {
      "Radiator Size": "360mm",
      "Fan Size": "3x 120mm",
      "Fan Speed": "500-2,000 RPM",
      "RGB": "Yes",
      "Compatible Sockets": "Intel: LGA 1200, 115X, 2066; AMD: AM4, sTRX4"
    },
    stock: 10,
    rating: 4.7
  }
];