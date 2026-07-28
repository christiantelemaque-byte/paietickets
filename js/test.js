// js/test.js - Version avec initialisation directe
const SUPABASE_URL = 'https://iiceaseqdzcdfgkiinnx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_VZxq4hifeXH7kyDdi91FJg_LlzNoCiL';

// Initialiser le client Supabase directement ici
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testSupabase() {
    try {
        // Tester la connexion à Supabase
        const { data, error } = await supabase
            .from('gold_prices')
            .select('*')
            .limit(1);
        
        if (error) {
            // Erreur
            alert('❌ ERREUR de connexion à Supabase !\n\nMessage : ' + error.message + '\n\nVérifie que la table "gold_prices" existe bien.');
        } else {
            // Succès
            alert('✅ CONNEXION RÉUSSIE !\n\nDonnées récupérées :\n' + JSON.stringify(data, null, 2) + '\n\nLa base de données est accessible.');
        }
    } catch (err) {
        alert('❌ ERREUR INATTENDUE !\n\nMessage : ' + err.message);
    }
}

// Exécuter le test
testSupabase();
