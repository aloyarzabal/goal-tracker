import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mzhcenhqzfinldhwcdqd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16aGNlbmhxemZpbmxkaHdjZHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMTkxMzMsImV4cCI6MjAzNjY5NTEzM30.0ftRN_7z33IWdeDYJLuhx_U63g20HcbBzTg0mkM-lf4";
export const supabase = createClient(supabaseUrl, supabaseKey);
