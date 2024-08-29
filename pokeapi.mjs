pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon/electabuzz")
        .then(response => response.json())
        .then(data => {
            // Nombre
            const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            console.log(`\nName: ${name}\n`);
            // Habilidades
            const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
            console.log(`Abilities: ${abilities}\n`);
            // Tipo
            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            console.log(`Type: ${types}\n`);
            // Estadísticas
            console.log('Stats:');
            data.stats.forEach(stat => {
                console.log(`${stat.stat.name}: ${stat.base_stat}`);
            
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
