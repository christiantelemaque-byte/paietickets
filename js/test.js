// js/test.js
async function testSupabase() {
    const { data, error } = await supabase
        .from('gold_prices')
        .select('*')
        .limit(1);
    
    if (error) {
        console.error('Erreur de connexion :', error);
    } else {
        console.log('Connexion réussie ! Données :', data);
    }
}

testSupabase();
