import Button from "@/components/button";
import { Field, FieldInput, FieldLabel } from "@/components/field";
import Link from "next/link";

export default function RecoverPasswordPage() {
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <h1 className="text-primary-dark selection:text-white selection:bg-primary-dark">
        Pemulihan kata sandi
      </h1>
      <form className="w-full flex flex-col gap-4">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldInput placeholder="Masukkan email Anda" />
        </Field>
        <Button className="mt-3">Kirim Konfirmasi</Button>
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
