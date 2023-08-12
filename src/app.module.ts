import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [AuthModule, AccountModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
