// config.js - Conexión a Supabase (solo para el navegador)
const _supabaseUrl = 'https://bzznyvzzwfqqxqddjqwh.supabase.co';
const _supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6em55dnp6d2ZxcXhxZGRqcXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMjQ2NDMsImV4cCI6MjA5MzkwMDY0M30.2WijLJ-wjL5o6d5NeVAow0VpNOpyxMYzX6Q69bd0o0I';
const _supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

const COMISION_PRESENCIAL_PCT = 4;
const COMISION_ONLINE_PCT = 6;
