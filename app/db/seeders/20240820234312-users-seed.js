'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      { name: 'Leo Varela', phone: '3158600703',  code: 'L0703',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Andrés Varela', phone: '3005775845',  code: 'A5845',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Elizabeth Maury', phone: '3005333591',  code: 'E3591',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gledis Calderon', phone: '3247396030',  code: 'G6030',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jose Gomez', phone: '3134091948',  code: 'J1948',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jonathan Gomez', phone: '3028307242',  code: 'J7242',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Colombia Villarrela', phone: '',  code: 'C0000',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gisella Gomez', phone: '3042315146',  code: 'G5146',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cristina Gomez', phone: '3007440176',  code: 'C0176',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sergio Gomez', phone: '3014987175',  code: 'S7175',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Josefa Segovia', phone: '3024062461',  code: 'J2461',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Geovanni Gomez', phone: '3043893548',  code: 'G3548',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Beatriz Rojano', phone: '300 2706928',  code: 'B6928',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sair Calderon', phone: '3164325199',  code: 'S5199',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alejandra Beleño', phone: '3215570736',  code: 'A0736',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Maria Alejandra Calderon', phone: '3332525283',  code: 'M5283',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Miriam Calderon', phone: '3145074158',  code: 'M4158',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Julio Alonso', phone: '',  code: 'J0001',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Olga Calderon', phone: '3013153908',  code: 'O3908',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alejandra Julio', phone: '3023043408',  code: 'A3408',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Julie Julio', phone: '3115870943',  code: 'J0943',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Enelsy Calderon', phone: '3219444017',  code: 'E4017',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Victor Vives', phone: '3012367735',  code: 'V7735',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Israel Vives', phone: '',  code: 'I0002',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Daniel Navarro', phone: '3052406899',  code: 'D6899',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Marbel Alonso', phone: '3003035948',  code: 'M5948',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Victor Navarro', phone: '',  code: 'V0003',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gleidys Gomez', phone: '3012855376',  code: 'G5376',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Marlon Meza', phone: '3004853699',  code: 'M3699',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juan Camilo Trillos', phone: '',  code: 'J0006',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shaideth Meza', phone: '',  code: 'S0004',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juan camilo Ramos', phone: '3012312007',  code: 'J2007',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Angelica Rihondo', phone: '3013377116',  code: 'A7116',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mercedes Lineros', phone: '',  code: 'M0005',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Edith Calderon', phone: '3209744256',  code: 'E4256',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mayerlis Yance', phone: '3244348778',  code: 'M8778',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kevin ', phone: '3193315021',  code: 'K5021',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Deyris Ariza', phone: '3043477919',  code: 'D7919',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Anthony Barragan', phone: '3165898917',  code: 'A8917',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Everlides Ruiz', phone: '',  code: 'E0007',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Javier Ariza', phone: '3007012253',  code: 'J2253',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luz Deivis de la Hoz', phone: '',  code: 'M0008',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Raul Carbono', phone: '3117312083',  code: 'R2083',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nuris de Carbono', phone: '3117312083',  code: 'N0009',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Guillermo de la Hoz', phone: '',  code: 'G0010',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aldair Moreno', phone: '3015110646',  code: 'A0646',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luis Manuel Viloria', phone: '3024841705',  code: 'L1705',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Camila Diaz', phone: '3043809092',  code: 'C9092',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Suleidys Pino', phone: '3246375305',  code: 'S5305',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oswaldo Rojano', phone: '3014523769',  code: 'O3769',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nelson Chamorro', phone: '3138911620',  code: 'N1620',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yenis Garces', phone: '3146175935',  code: 'Y5935',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gabriel Coronado', phone: '3006890998',  code: 'G0998',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Natalia de Coronado', phone: '16507728042',  code: 'N18042',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Anderson Camero', phone: '3503480898',  code: 'A0898',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Linda de Camero', phone: '',  code: 'L0011',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jorge Aaron', phone: '3104131120',  code: 'J1120',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jorge Eliecer Aaron', phone: '3222424921',  code: 'J4921',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Esteban Jimenez', phone: '',  code: 'E0012',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Angie Aaron', phone: '3027718422',  code: 'A8422',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Helen Aaron', phone: '3042370949',  code: 'H0949',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Erick Londoño', phone: '3016905715',  code: 'E5715',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Liseth Bernal', phone: '3004193622',  code: 'L3622',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jorge Londoño', phone: '',  code: 'J0013',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sharon Londoño', phone: '',  code: 'S0014',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Evelio Alvarez', phone: '',  code: 'E0015',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Esilda Gomez', phone: '',  code: 'E0016',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Diana Alvarez', phone: '',  code: 'D0017',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jaime Alvarez', phone: '',  code: 'J0018',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cindy Cerquera', phone: '',  code: 'C0019',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jesus Alvarez', phone: '',  code: 'J0020',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Olga Alvarez', phone: '',  code: 'O0021',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Raul Guerra', phone: '',  code: 'R0022',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Manuel Gomez', phone: '',  code: 'M0023',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luisa Aleman', phone: '',  code: 'L0024',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'William Gomez', phone: '',  code: 'W0025',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yamile Gomez', phone: '',  code: 'Y0026',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Carlos Velazquez', phone: '',  code: 'C0027',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'William Trespalacios', phone: '',  code: 'W0028',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Freddy Figueroa', phone: '',  code: 'F0029',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nuris Santana', phone: '',  code: 'N0030',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Heidy Paternina', phone: '',  code: 'H0031',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Geraldine Alvarez', phone: '3017800952',  code: 'G0952',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Geraime Alvarez', phone: '3023218880',  code: 'G8880',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chelsy Paez', phone: '3011886828',  code: 'C6828',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Maybelin Londoño', phone: '3147247731',  code: 'M7731',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Johana Thorne', phone: '',  code: 'J0032',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'German Rodriguez', phone: '',  code: 'G0033',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juan Barreto', phone: '',  code: 'J0034',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Diana Pedroza', phone: '',  code: 'D0035',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luis Fontalvo', phone: '',  code: 'L0036',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yuranis Mejia', phone: '',  code: 'Y0037',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Liliana Salgado', phone: '',  code: 'L0038',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mercedes Zambrano', phone: '',  code: 'M0039',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Astrid Jimenez', phone: '',  code: 'A0040',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Anibal Buelvas', phone: '',  code: 'A0041',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ada Luz Asis', phone: '',  code: 'A0042',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Evelyn Hoyos', phone: '',  code: 'E0043',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Keila Luna', phone: '3013766048',  code: 'K6048',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mati Surmay', phone: '',  code: 'M0044',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Helen Palencia', phone: '',  code: 'H0045',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jhan Carlos Torregroza', phone: '3173602484',  code: 'J2484',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Paola Orozco', phone: '3217822735',  code: 'P2735',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Marlyn Cera', phone: '',  code: 'M0046',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dairo Silva', phone: '3013627508',  code: 'D7508',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Elvia Diaz', phone: '3013627508',  code: 'E7508',  isConfirmed: false, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
