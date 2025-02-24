"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import { signUp } from "../../../actions/auth";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Иркутск",
  "Краснодар",
  "Ростов-на-Дону",
  "Сочи",
  "Ялта",
  "Самара",
  "Аксай",
  "Калининград",
];

export default function SignUpForm() {
  const [state, formAction] = useFormState(signUp, null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (formData: FormData) => {
    setIsSubmitting(true);
    formAction(formData);
    setIsSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <Card className="w-[430px]">
        <CardHeader>
          <CardTitle className="text-2xl font-medium text-center">
            Авторизация в системе
          </CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                {/*<Label htmlFor="email">Email</Label>*/}
                <Input
                  className="h-12 rounded-full border-gray-300"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email*"
                  required
                />
                {state?.error?.email && (
                  <p className="text-sm text-red-500 flex items-center mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    error
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  className="h-12 rounded-full border-gray-300"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Пароль*"
                  required
                />
                {state?.error?.password && (
                  <p className="text-sm text-red-500 flex items-center mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    error
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Select name="city" required>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state?.error?.city && (
                  <p className="text-sm text-red-500 flex items-center mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    error
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full h-12 bg-[#2B579A] hover:bg-[#1E3F6F] rounded-full text-base font-medium mt-2"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing up...' : 'Зарегистриваться'}
            </Button>
            <div className="text-sm text-center text-primary/50">
              Аккаунт уже существует?{" "}
              <Link
                href="/signin"
                className="text-gray-600 hover:underline"
                aria-label="войдите в свой аккаунт"
              >
                Войти
              </Link>
            </div>
          </CardFooter>
        </form>
        {state?.success && (
          <p className="text-sm text-green-500 text-center mt-2">
            Авторизация прошла успешно!
          </p>
        )}
      </Card>
    </div>
  );
}
