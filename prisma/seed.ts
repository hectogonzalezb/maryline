import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();

  // Tipos de producto
  const labial = await prisma.productType.upsert({
    where: { name: 'Labial' },
    update: {},
    create: { name: 'Labial' },
  });
  await prisma.$disconnect();

  const prisma2 = new PrismaClient();
  const base = await prisma2.productType.upsert({
    where: { name: 'Base' },
    update: {},
    create: { name: 'Base' },
  });
  await prisma2.$disconnect();

  const prisma3 = new PrismaClient();
  const sombra = await prisma3.productType.upsert({
    where: { name: 'Sombra' },
    update: {},
    create: { name: 'Sombra' },
  });
  await prisma3.$disconnect();

  const prisma4 = new PrismaClient();
  const rubor = await prisma4.productType.upsert({
    where: { name: 'Rubor' },
    update: {},
    create: { name: 'Rubor' },
  });
  await prisma4.$disconnect();

  const prisma5 = new PrismaClient();
  const calido = await prisma5.subTone.upsert({
    where: { name: 'Cálido' },
    update: {},
    create: { name: 'Cálido' },
  });
  const frio = await prisma5.subTone.upsert({
    where: { name: 'Frío' },
    update: {},
    create: { name: 'Frío' },
  });
  const neutro = await prisma5.subTone.upsert({
    where: { name: 'Neutro' },
    update: {},
    create: { name: 'Neutro' },
  });
  await prisma5.$disconnect();

  const prisma6 = new PrismaClient();
  const normal = await prisma6.skinType.upsert({
    where: { name: 'Normal' },
    update: {},
    create: { name: 'Normal' },
  });
  const grasa = await prisma6.skinType.upsert({
    where: { name: 'Grasa' },
    update: {},
    create: { name: 'Grasa' },
  });
  const seca = await prisma6.skinType.upsert({
    where: { name: 'Seca' },
    update: {},
    create: { name: 'Seca' },
  });
  const mixta = await prisma6.skinType.upsert({
    where: { name: 'Mixta' },
    update: {},
    create: { name: 'Mixta' },
  });
  await prisma6.$disconnect();

  const prisma7 = new PrismaClient();
  const rojo = await prisma7.color.create({
    data: { name: 'Rojo Intenso', hexCode: '#B11226', category: 'Cálido' },
  });
  const beige = await prisma7.color.create({
    data: { name: 'Beige Claro', hexCode: '#FBE9E7', category: 'Neutro' },
  });
  const azul = await prisma7.color.create({
    data: { name: 'Azul Hielo', hexCode: '#C1DFFF', category: 'Frío' },
  });
  const durazno = await prisma7.color.create({
    data: { name: 'Durazno Suave', hexCode: '#F5CBA7', category: 'Cálido' },
  });
  const rosa = await prisma7.color.create({
    data: { name: 'Rosa Viejo', hexCode: '#D98880', category: 'Neutro' },
  });
  await prisma7.$disconnect();

  const prisma8 = new PrismaClient();
  await prisma8.product.create({
    data: {
      name: 'Labial Rouge Dior',
      description: 'Color intenso y elegante de larga duración',
      price: 34990,
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1710000000/labial_dior.jpg',
      brand: 'Dior',
      productTypeId: labial.id,
      colorId: rojo.id,
      skinTypeId: normal.id,
      subToneId: calido.id,
    },
  });
  await prisma8.product.create({
    data: {
      name: 'Base Double Wear',
      description: 'Cobertura total de larga duración',
      price: 42990,
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1710000001/base_estee.jpg',
      brand: 'Estée Lauder',
      productTypeId: base.id,
      colorId: beige.id,
      skinTypeId: grasa.id,
      subToneId: neutro.id,
    },
  });
  await prisma8.product.create({
    data: {
      name: 'Sombra Color Tattoo',
      description: 'Sombra cremosa de alta pigmentación',
      price: 7990,
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1710000002/sombra_maybelline.jpg',
      brand: 'Maybelline',
      productTypeId: sombra.id,
      colorId: azul.id,
      skinTypeId: seca.id,
      subToneId: frio.id,
    },
  });
  await prisma8.product.create({
    data: {
      name: 'Rubor Fit Me',
      description: 'Rubor natural para uso diario',
      price: 7490,
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1710000003/rubor_fitme.jpg',
      brand: 'Maybelline',
      productTypeId: rubor.id,
      colorId: durazno.id,
      skinTypeId: mixta.id,
      subToneId: calido.id,
    },
  });
  await prisma8.product.create({
    data: {
      name: 'Labial Matte Ink',
      description: 'Labial líquido matte de alta duración',
      price: 8990,
      imageUrl: 'https://res.cloudinary.com/demo/image/upload/v1710000004/labial_matteink.jpg',
      brand: 'Maybelline',
      productTypeId: labial.id,
      colorId: rosa.id,
      skinTypeId: normal.id,
      subToneId: neutro.id,
    },
  });
  await prisma8.$disconnect();

  console.log('💄 Seed ejecutado con éxito.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
