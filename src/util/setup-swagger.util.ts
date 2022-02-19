import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('NestJS-Authentication-Full')
    .setContact(
      'Adrian Pietrzak',
      'https://pietrzakadrian.com',
      'contact@pietrzakadrian.com',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);
}
