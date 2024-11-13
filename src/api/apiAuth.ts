import { supabase } from "./supabase";

interface Props {
  email: string;
  password: string;
}

export async function login({ email, password }: Props) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data } = await supabase.auth.getUser();
  return data?.user;
}
