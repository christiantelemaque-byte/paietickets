// js/test.js
async function testSupabase() {
    console.log('🔄 Test de connexion à Supabase...');
    
    const { data, error } = await supabase
        .from('gold_prices')
        .select('*')
        .limit(1);
    
    if (error) {
        console.error('❌ Erreur de connexion :', error.message);
        console.error('Détails :', error);
        alert('Erreur de connexion à la base de données. Voir la console pour plus de détails.');
    } else {
        console.log('✅ Connexion réussie !');
        console.log('📊 Données récupérées :', data);
        alert('Connexion à Supabase réussie ! Vérifie la console (F12) pour voir les données.');
    }
}

// Exécuter le test automatiquement au chargement de la page
testSupabase();
