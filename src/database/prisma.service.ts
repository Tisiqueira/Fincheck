/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

 
  
}
