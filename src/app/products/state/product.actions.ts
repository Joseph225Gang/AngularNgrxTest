import { Product } from '../product';

import { createAction, props } from '@ngrx/store';

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code'
);
