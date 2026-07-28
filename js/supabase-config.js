// js/supabase-config.js
const SUPABASE_URL = 'https://iiceaseqdzcdfgkiinnx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_VZxq4hifeXH7kyDdi91FJg_LlzNoCiL';

// Initialiser le client Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
