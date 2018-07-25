import { DeliveryFormModule } from './delivery-form.module';

describe('DeliveryFormModule', () => {
  let deliveryFormModule: DeliveryFormModule;

  beforeEach(() => {
    deliveryFormModule = new DeliveryFormModule();
  });

  it('should create an instance', () => {
    expect(deliveryFormModule).toBeTruthy();
  });
});
