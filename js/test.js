// js/test.js - Version avec alerte
async function testSupabase() {
    try {
        // Tester la connexion à Supabase
        const { data, error } = await supabase
            .from('gold_prices')
            .select('*')
            .limit(1);
        
        if (error) {
            // Erreur : afficher une alerte rouge
            alert('❌ ERREUR de connexion à Supabase !\n\nMessage : ' + error.message + '\n\nVérifie que la table "gold_prices" existe bien.');
        } else {
            // Succès : afficher une alerte verte
            alert('✅ CONNEXION RÉUSSIE !\n\nDonnées récupérées :\n' + JSON.stringify(data, null, 2) + '\n\nLa base de données est accessible.');
        }
    } catch (err) {
        alert('❌ ERREUR INATTENDUE !\n\nMessage : ' + err.message);
    }
}

// Exécuter le test au chargement de la page
testSupabase();
