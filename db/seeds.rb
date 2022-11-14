puts "Seeding Buyers...👨👩"

b1 = Buyer.create(full_name: "Dylan Carver", username: "dylancarver19", email: "dylancarver@gmail.com", password: "1234", address: "123 Main St.")
b2 = Buyer.create(full_name: "Kristen Carver", username: "kristencarver23", email: "kristencarver@gmail.com", password: "1234", address: "1234 Main St.")
b3 = Buyer.create(full_name: "Winter Carver", username: "wintercarver21", email: "wintercarver@gmail.com", password: "1234", address: "12345 Main St.")

puts "Seeding Items...📦📦📦"

ides1 = "The GeForce RTX 4090 Ti will be a graphics card by NVIDIA, that is expected to launch in 2023. Built on the 4 nm process, and based on the AD102 graphics processor, in its AD102-450-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 4090 Ti. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games. The AD102 graphics processor is a large chip with a die area of 608 mm² and 76,300 million transistors. It features 18176 shading units, 568 texture mapping units, and 192 ROPs. Also included are 568 tensor cores which help improve the speed of machine learning applications. The card also has 142 raytracing acceleration cores. NVIDIA has paired 48 GB GDDR6X memory with the GeForce RTX 4090 Ti, which are connected using a 384-bit memory interface. The GPU is operating at a frequency of 2355 MHz, which can be boosted up to 2625 MHz, memory is running at 1500 MHz (24 Gbps effective).
Being a triple-slot card, the NVIDIA GeForce RTX 4090 Ti draws power from 2x 16-pin power connectors, with power draw rated at 800 W maximum. Display outputs include: 1x HDMI 2.1, 3x DisplayPort 1.4a. GeForce RTX 4090 Ti is connected to the rest of the system using a PCI-Express 4.0 x16 interface. The card's dimensions are 336 mm x 140 mm x 61 mm, and it features a triple-slot cooling solution."
ides2 = "The Radeon RX 6900 XT is an enthusiast-class graphics card by AMD, launched on October 28th, 2020. Built on the 7 nm process, and based on the Navi 21 graphics processor, in its Navi 21 XTX variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on Radeon RX 6900 XT. Additionally, the DirectX 12 Ultimate capability guarantees support for hardware-raytracing, variable-rate shading and more, in upcoming video games. The Navi 21 graphics processor is a large chip with a die area of 520 mm² and 26,800 million transistors. It features 5120 shading units, 320 texture mapping units, and 128 ROPs. The card also has 80 raytracing acceleration cores. AMD has paired 16 GB GDDR6 memory with the Radeon RX 6900 XT, which are connected using a 256-bit memory interface. The GPU is operating at a frequency of 1825 MHz, which can be boosted up to 2250 MHz, memory is running at 2000 MHz (16 Gbps effective).
Being a triple-slot card, the AMD Radeon RX 6900 XT draws power from 2x 8-pin power connectors, with power draw rated at 300 W maximum. Display outputs include: 1x HDMI 2.1, 2x DisplayPort 1.4a, 1x USB Type-C. Radeon RX 6900 XT is connected to the rest of the system using a PCI-Express 4.0 x16 interface. The card's dimensions are 267 mm x 120 mm x 50 mm, and it features a triple-slot cooling solution. Its price at launch was 999 US Dollars."
ides3 = "VENGEANCE RGB PRO Series DDR4 overclocked memory lights up your PC with mesmerizing dynamic multi-zone RGB lighting, while delivering the best in DDR4 performance."
ides4 = "Trident Z Royal is the latest addition to the Trident Z flagship family and features a crown jewel design. Meticulously crafted to display just the right amount of light refraction, the patented crystalline light bar scatters the RGB colors in a magnificent display of LED lighting. Mirroring the high-class light bar design, polished aluminum heatspreaders of gold or silver colors cools the memory modules in the award-winning classic Trident Z tri-fin design."
ides5 = "The Intel Core i9-13900K is a desktop processor with 24 cores, launched in September 2022. It is part of the Core i9 lineup, using the Raptor Lake architecture with Socket 1700. Thanks to Intel Hyper-Threading the core-count is effectively doubled, to 32 threads. Core i9-13900K has 36MB of L3 cache and operates at 3 GHz by default, but can boost up to 5.8 GHz, depending on the workload. Intel is building the Core i9-13900K on a 10 nm production process, the transistor count is unknown. You may freely adjust the unlocked multiplier on Core i9-13900K, which simplifies overclocking greatly, as you can easily dial in any overclocking frequency.
With a TDP of 125 W, the Core i9-13900K consumes a lot of power, so good cooling is definitely needed. Intel's processor supports DDR4 and DDR5 memory with a dual-channel interface. ECC memory is supported, too, which is an important capability for mission-critical systems, to avoid data corruption. For communication with other components in the computer, Core i9-13900K uses a PCI-Express Gen 5 connection. This processor features the UHD Graphics 770 integrated graphics solution.
Hardware virtualization is available on the Core i9-13900K, which greatly improves virtual machine performance. Additionally, IOMMU virtualization (PCI passthrough) is supported, so that guest virtual machines may directly use host hardware. Programs using Advanced Vector Extensions (AVX) will run on this processor, boosting performance for calculation-heavy applications. Besides AVX, Intel is including the newer AVX2 standard, too, but not AVX-512."
ides6 = "The AMD Ryzen 9 7950X is a desktop processor with 16 cores, launched in September 2022. It is part of the Ryzen 9 lineup, using the Zen 4 (Raphael) architecture with Socket AM5. Thanks to AMD Simultaneous Multithreading (SMT) the core-count is effectively doubled, to 32 threads. Ryzen 9 7950X has 64MB of L3 cache and operates at 4.5 GHz by default, but can boost up to 5.7 GHz, depending on the workload. AMD is making the Ryzen 9 7950X on a 5 nm production node using 13,140 million transistors. The silicon die of the chip is not fabricated at AMD, but at the foundry of TSMC. You may freely adjust the unlocked multiplier on Ryzen 9 7950X, which simplifies overclocking greatly, as you can easily dial in any overclocking frequency.
With a TDP of 170 W, the Ryzen 9 7950X is extremely power hungry, which means you need top-notch cooling. AMD's processor supports DDR5 memory with a dual-channel interface. The highest officially supported memory speed is 5200 MHz, but with overclocking (and the right memory modules) you can go even higher. ECC memory is supported, too, which is an important capability for mission-critical systems, to avoid data corruption. For communication with other components in the machine, Ryzen 9 7950X uses a PCI-Express Gen 5 connection. This processor features the Radeon Graphics integrated graphics solution.
Hardware virtualization is available on the Ryzen 9 7950X, which greatly improves virtual machine performance. Programs using Advanced Vector Extensions (AVX) can run on this processor, boosting performance for calculation-heavy applications. Besides AVX, AMD has added support for the newer AVX2 and AVX-512 instructions, too."
ides7 = "Built using their V-NAND 3-bit MLC flash technology and Elpsis controller, the 2TB 980 PRO PCIe 4.0 x4 M.2 Internal SSD from Samsung offers an M.2 2280 form factor and a PCIe 4.0 x4 / NVMe 1.3 interface to deliver sequential read speeds of up to 7000 MB/s and sequential write speeds of up to 5100 MB/s. Users will also have access to encryption via TCG/Opal 2.0 and MS eDrive."
ides8 = "Basic bootup speeds won't cut it — not at work, on the go, or in the game. But the Crucial® P3 SSD is anything but basic. With NVMe™ performance that's nearly 6x faster than SATA2 and storage capacities up to 4TB3, the P3 leaves older storage technology in the dust. Get faster bootups, downloads and file transfers, and store all your files, photos, videos, apps, and games with room to spare with the quality and dependability you expect from Crucial."

iimg1 = "https://tpucdn.com/gpu-specs/images/c/3889-front.small.jpg"
iimg2 = "https://tpucdn.com/gpu-specs/images/c/3481-front.small.jpg"
iimg3 = "https://www.corsair.com/medias/sys_master/images/images/hb9/hd2/9112501747742/-CMW32GX4M4C3200C16W-Gallery-Vegeance-RGB-PRO-WHT-05-4up.png"
iimg4 = "https://www.gskill.com/_upload/images/1908121830273.png"
iimg5 = "https://tpucdn.com/cpu-specs/images/chips/2817-package.jpg"
iimg6 = "https://tpucdn.com/cpu-specs/images/chips/2846-package.jpg"
iimg7 = "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/computing/ssd/client/980-pro/2tb/MZ-V8P2T0BW_001_Front_Black.jpg?$product-details-jpg$"
iimg8 = "https://tpucdn.com/ssd-specs/images/d/829-front.small.jpg"

i1 = Item.create(item_name: "NVIDIA GeForce RTX 4090 Ti", price: 1599, img_url: iimg1, description: ides1, category: "GPU", cart_status: false, sold_status: false, manufacturer: "Nvidia", clock_speed: 2625 , capacity: nil)

i2 = Item.create(item_name: "AMD Radeon RX 6900 XT", price: 699.99, img_url: iimg2, description: ides2, category: "GPU", cart_status: false, sold_status: false, manufacturer: "AMD", clock_speed: 2625 , capacity: nil)

i3 = Item.create(item_name: "VENGEANCE® RGB PRO 32GB (4x8GB) DDR4 DRAM 3200MHz C16 Memory Kit — White", price: 149.99, img_url: iimg3, description: ides3, category: "Memory", cart_status: false, sold_status: false, manufacturer: "Corsair", clock_speed: 3200 , capacity: 32)

i4 = Item.create(item_name: "Trident Z Royal 16GB (2x8GB) DDR4 DRAM 4800MHz", price: 435.99, img_url: iimg4, description: ides4, category: "Memory", cart_status: false, sold_status: false, manufacturer: "G.Skill", clock_speed: 4800 , capacity: 16)

i5 = Item.create(item_name: "Intel Core i9-13900K", price: 589, img_url: iimg5, description: ides5, category: "CPU", cart_status: false, sold_status: false, manufacturer: "Intel", clock_speed: 5800 , capacity: nil)

i6 = Item.create(item_name: "AMD Ryzen 9 7950X", price: 699, img_url: iimg6, description: ides6, category: "CPU", cart_status: false, sold_status: false, manufacturer: "AMD", clock_speed: 5700 , capacity: nil)

i7 = Item.create(item_name: "980 PRO PCIe® 4.0 NVMe™ SSD 2TB", price: 279.99, img_url: iimg7, description: ides7, category: "Storage", cart_status: false, sold_status: false, manufacturer: "Samsung", clock_speed: nil , capacity: 2000)



i8 = Item.create(item_name: "Crucial P3 1TB PCIe M.2 2280 SSD", price: 89.99, img_url: iimg8, description: ides8, category: "Storage", cart_status: false, sold_status: true, manufacturer: "Crucial", clock_speed: nil , capacity: 1000)

puts "Seeding Purchased Items...💲💲💲"

PurchasedItem.create(buyer_id: b3.id, item_id: i8.id, purchase_date: nil)



