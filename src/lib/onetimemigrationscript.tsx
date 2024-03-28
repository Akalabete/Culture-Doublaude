const { PrismaClient } = require('@prisma/client');
const mockData = require('./annuaire.json');

const prisma = new PrismaClient();

async function main() {
  for (const item of mockData) {
    // Créez ou trouvez le type
    const type = await prisma.type.upsert({
      where: { name: item.type },
      update: {},
      create: { name: item.type },
    });

    // Créez ou trouvez la catégorie
    const category = await prisma.category.upsert({
      where: { name: item.category },
      update: {},
      create: {
        name: item.category,
        typeId: type.id,
      },
    });

    // Créez la carte de service
    await prisma.serviceCard.create({
      data: {
        name: item.name,
        adress: item.adress, 
        zipcode: item.zipcode, 
        city: item.city,
        description: item.description, 
        phone: item.phone,
        email: item.email,
        url: item.url,
        photo: item.photo.map((p: { url: string; alt: string; }) => ({ url: p.url, alt: p.alt })),
        lat: item.lat,
        long: item.long,
        openingDaysHours: item.openingDaysHours,        
        categoryId: category.id,
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });