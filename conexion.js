const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://bzznyvzzwfqqxqddjqwh.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6em55dnp6d2ZxcXhxZGRqcXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMjQ2NDMsImV4cCI6MjA5MzkwMDY0M30.2WijLJ-wjL5o6d5NeVAow0VpNOpyxMYzX6Q69bd0o0I'
const supabase = createClient(supabaseUrl, supabaseKey)

// ... (parte de la conexión arriba igual)

async function crearArticulo() {
    console.log("Intentando sembrar con los nombres de la foto...");

    const { data, error } = await supabase
        .from('articulos')
        .insert([
                    { 
                        "id": "web_" + Date.now(), 
                        "Titulo": titulo, 
                        "precio base": parseFloat(precio),
                        "precio real": parseFloat(precio), // <--- Usamos el de la foto
                        "descripcion": desc 
                    }
                ]);
        .select()

    if (error) {
        console.log("Error técnico detallado:", error.message)
    } else {
        console.log("¡POR FIN! Guardamos esto:", data)
    }
}

crearArticulo()