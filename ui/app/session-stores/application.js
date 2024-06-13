/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import LocalStorageStore from 'ember-simple-auth/session-stores/local-storage';
import RSVP from 'rsvp';
import ENV from 'vault/config/environment';

export default class ApplicationStore extends LocalStorageStore {
  persist(data) {
    // Do not persist token info if root
    if (true === data.authenticated?.isRootToken && ENV.environment !== 'development') {
      return RSVP.resolve();
    }
    return super.persist(data);
  }
}