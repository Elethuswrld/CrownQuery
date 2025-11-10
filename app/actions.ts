'use server'
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/lib/firebase/server";

const ProductSchema = z.object({
    name: z.string(),
    price: z.string(),
});

export type AddProductState = {
    errors?: {
        name?: string[];
        price?: string[];
    };
    message?: string | null;
};

export async function addProduct(prevState: AddProductState, formData: FormData): Promise<AddProductState> {
    const validatedFields = ProductSchema.safeParse({
        name: formData.get('name'),
        price: formData.get('price'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        await db.collection("products").add({
            name: validatedFields.data.name,
            price: validatedFields.data.price,
            style: "Uncategorized",
            imageUrl: "/images/placeholder.jpg",
        });

        revalidatePath("/catalog");

        return {
            message: "Product added successfully!",
        }
    } catch (error) {
        return {
            message: "Failed to add product.",
        }
    }
}

export async function saveProduct(productId: string, userId: string) {
    try {
        const savedProductRef = db.collection('savedProducts').doc(`${userId}_${productId}`);
        const doc = await savedProductRef.get();

        if (doc.exists) {
            await savedProductRef.delete();
        } else {
            await savedProductRef.set({
                userId: userId,
                productId: productId,
            });
        }
        revalidatePath('/catalog');
    } catch (error) {
        console.error("Error saving product:", error);
    }
}
