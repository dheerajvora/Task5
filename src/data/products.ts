export interface Product {
    id: number;
    title: string;
    department: string;
    originalPrice: number;
    discountedPrice: number;
    image: string;
    colors: string[];
}

export const products: Product[] = [
    {
        id: 1,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product1.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    },
    {
        id: 2,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product2.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    },
    {
        id: 3,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product3.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    },
    {
        id: 4,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product4.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    },
    {
        id: 5,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product1.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    },
    {
        id: 6,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product2.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    },
    {
        id: 7,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product3.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    },
    {
        id: 8,
        title: "Graphic Design",
        department: "English Department",
        originalPrice: 16.48,
        discountedPrice: 6.48,
        image: "/images/product/product4.png",
        colors: ['#4A90E2', '#F5A623', '#7ED321', '#333333']
    }
]; 