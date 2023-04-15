//INSTANCES
const char = createKnigth('Humbert');
const monster = createLittleMonster();


//TESTS
stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);