import type { Schema, Attribute } from '@strapi/strapi';

export interface StandStand extends Schema.Component {
  collectionName: 'components_stand_stands';
  info: {
    displayName: 'Stand';
    icon: 'pinMap';
  };
  attributes: {
    room: Attribute.Relation<'stand.stand', 'oneToOne', 'api::room.room'>;
    numStand: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'stand.stand': StandStand;
    }
  }
}
