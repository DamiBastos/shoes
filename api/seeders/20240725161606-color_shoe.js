'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Obtén IDs de Shoes y Colors
    const shoes = await queryInterface.sequelize.query(
      `SELECT id from Shoes;`
    );
    const colors = await queryInterface.sequelize.query(
      `SELECT id from Colors;`
    );

    const shoeRows = shoes[0];
    const colorRows = colors[0];

    return queryInterface.bulkInsert('color_shoes', [
      { shoe_id: shoeRows[0].id, color_id: colorRows[7].id, image: 'https://i.ibb.co/Q9ddTRv/allstaramarillo.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[1].id, color_id: colorRows[12].id, image: 'https://i.ibb.co/fvDtfnK/allstarbeige2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[2].id, color_id: colorRows[9].id, image: 'https://i.ibb.co/dtLCxfC/allstarfloreada.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[3].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/JmyD1Ry/allstarnegra2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[4].id, color_id: colorRows[2].id, image: 'https://i.ibb.co/cFPJTqD/allstarrojablanca.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[5].id, color_id: colorRows[5].id, image: 'https://i.ibb.co/gjRdJXv/allstarrosa.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[6].id, color_id: colorRows[11].id, image: 'https://i.ibb.co/23RLmnR/allstarturqueza2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[7].id, color_id: colorRows[4].id, image: 'https://i.ibb.co/hRqbQWc/allstarverde.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[8].id, color_id: colorRows[9].id, image: 'https://i.ibb.co/s3p59dJ/allstarvioletaclaro.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[9].id, color_id: colorRows[1].id, image: 'https://i.ibb.co/L17BZ6v/converseblanca2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[10].id, color_id: colorRows[1].id, image: 'https://i.ibb.co/SyWwGCt/converseblancaclasicabota.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[11].id, color_id: colorRows[8].id, image: 'https://i.ibb.co/W0jJCx9/vansbeigeblanco2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[12].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/BjTWQbt/vansnegra.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[13].id, color_id: colorRows[12].id, image: 'https://i.ibb.co/6vCqSrc/vansnegraclasica.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[14].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/r2c3Pq0/vansnegramarron.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[15].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/6vCqSrc/vansnegraclasica.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[16].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/R4HFGsc/vansnegraclasicabota.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[17].id, color_id: colorRows[10].id, image: 'https://i.ibb.co/wNzr4Fy/vanspancha2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[18].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/4P9h1Kh/vansrojapancha.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[19].id, color_id: colorRows[2].id, image: 'https://i.ibb.co/Jn1r3H4/vansnegrabota.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[20].id, color_id: colorRows[7].id, image: 'https://i.ibb.co/KN50nHX/nikegrisbicolor.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[21].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/T0YPdD4/nikemarronbicolor.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[22].id, color_id: colorRows[3].id, image: 'https://i.ibb.co/HrJJFvM/nikenegra.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[23].id, color_id: colorRows[6].id, image: 'https://i.ibb.co/tcxVWDL/nikenegrablanca.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[24].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/MgwvczF/nikenegraclasica.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[25].id, color_id: colorRows[7].id, image: 'https://i.ibb.co/60PB2Vf/nikeverdebicolor.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[26].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/TWPzsLK/vansmostaza.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[27].id, color_id: colorRows[4].id, image: 'https://i.ibb.co/rwRb5tN/vansnegra.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[28].id, color_id: colorRows[10].id, image: 'https://i.ibb.co/vZ6Nn42/vansnegrablanco.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[29].id, color_id: colorRows[5].id, image: 'https://i.ibb.co/KD4PQGj/vansnegraclasica.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[30].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/F052LWH/vansmostazabicolor.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[31].id, color_id: colorRows[9].id, image: 'https://i.ibb.co/fdMPnV6/vansnegraclasica2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[32].id, color_id: colorRows[10].id, image: 'https://i.ibb.co/92wqfTF/vansnegraroja.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[33].id, color_id: colorRows[0].id, image: 'https://i.ibb.co/cFMyd28/jordanbajasnegrayblanco.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[34].id, color_id: colorRows[2].id, image: 'https://i.ibb.co/V93308q/jordanbajasnegrayblancoalta.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[35].id, color_id: colorRows[2].id, image: 'https://i.ibb.co/PCHBDMD/nike-airjordan-blanco.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[36].id, color_id: colorRows[7].id, image: 'https://i.ibb.co/PwZsSBs/nike-jorda-blancoygris.jpg', createdAt: new Date(), updatedAt: new Date() },
      { shoe_id: shoeRows[37].id, color_id: colorRows[12].id, image: 'https://i.ibb.co/w7MK5b2/nikejordanblanca.jpg', createdAt: new Date(), updatedAt: new Date() },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('color_shoe', null, {});
  }
};
