"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/shared/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"

const formSchema = z.object({
    email: z.string().email({
        message: "Введите корректный email",
    }),
})

export function ForgotPasswordForm() {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Here you would typically make an API call to send reset email
        console.log(values)
        router.push("/reset-password")
    }

    return (
        <Card className="w-full max-w-[400px]">
            <CardHeader>
                <CardTitle className="text-center text-xl font-medium">Восстановление пароля</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="email" placeholder="Введите email*" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <div className="space-y-4">
                            <Button type="submit" className="w-full bg-[#2B5CE6] hover:bg-[#1e44b3]">
                                Отправить
                            </Button>
                            <Button type="button" variant="outline" className="w-full" onClick={() => router.push("/")}>
                                Вернуться к входу
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

