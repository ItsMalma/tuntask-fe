import Button from "@/components/button";
import { Field, FieldInput, FieldLabel } from "@/components/field";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <h1 className="text-primary-dark selection:text-white selection:bg-primary-dark">
        Buat akun
      </h1>
      <form className="w-full flex flex-col gap-4">
        <Field>
          <FieldLabel>Nama Lengkap</FieldLabel>
          <FieldInput placeholder="Masukkan nama lengkap Anda" />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldInput type="email" placeholder="Masukkan email Anda" />
        </Field>
        <Field>
          <FieldLabel>Kata Sandi</FieldLabel>
          <FieldInput type="password" placeholder="Isi kata sandi" />
        </Field>
        <Field>
          <FieldLabel>Konfirmasi Kata Sandi</FieldLabel>
          <FieldInput type="password" placeholder="Isi kembali kata sandi" />
        </Field>
        <Button className="mt-3">Daftar</Button>
      </form>
      <p className="text-sm text-secondary">
        Sudah memiliki akun?{" "}
        <Link href="/login" className="font-medium text-primary">
          Login disini
        </Link>
      </p>
    </div>
  );
}
