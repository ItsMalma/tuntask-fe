import Button from "@/components/button";
import { Checkbox, CheckboxInput, CheckboxLabel } from "@/components/checkbox";
import { Field, FieldInput, FieldLabel } from "@/components/field";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <h1 className="text-primary-dark selection:text-white selection:bg-primary-dark">
        Masuk
      </h1>
      <form className="w-full flex flex-col gap-4">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldInput placeholder="Masukkan email Anda" />
        </Field>
        <Field>
          <FieldLabel>Kata Sandi</FieldLabel>
          <FieldInput type="password" placeholder="Masukkan kata sandi Anda" />
        </Field>
        <div className="flex items-center justify-between">
          <Checkbox>
            <CheckboxInput />
            <CheckboxLabel>Ingat Saya</CheckboxLabel>
          </Checkbox>
          <Link
            href="/recover-password"
            className="text-sm font-medium text-primary"
          >
            Pulihkan kata sandi
          </Link>
        </div>
        <Button className="mt-3">Masuk</Button>
      </form>
      <p className="text-sm text-secondary">
        Belum memiliki akun?{" "}
        <Link href="/register" className="font-medium text-primary">
          Daftar disini
        </Link>
      </p>
    </div>
  );
}
