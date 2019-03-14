import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormField, CountrySelector, toGridTemplate } from '@deity/falcon-ecommerce-uikit';
import { Box, Button } from '@deity/falcon-ui';

const AddressFormArea = {
  firstName: 'firstName',
  lastName: 'lastName',
  street: 'street',
  number: 'number',
  postCode: 'postCode',
  city: 'city',
  email: 'email',
  phone: 'phone',
  region: 'region',
  country: 'country',
  submit: 'submit'
};

const addressFormLayout = {
  addressFormLayout: {
    display: 'grid',
    gridGap: 'sm',
    my: 'xs',
    fontSize: 'xs',
    // prettier-ignore
    gridTemplate:  toGridTemplate([
      ['1fr'                      ],
      [AddressFormArea.email      ],
      [AddressFormArea.firstName  ],
      [AddressFormArea.lastName   ],
      [AddressFormArea.street     ],
      [AddressFormArea.number     ],
      [AddressFormArea.postCode   ],
      [AddressFormArea.city       ],
      [AddressFormArea.phone      ],
      [AddressFormArea.country    ],
      [AddressFormArea.submit     ]
    ])
  }
};

const AddressForm = ({ countries = [], submitLabel = 'Save', id = '', autoCompleteSection }) => {
  const getAutoComplete = attribute => [autoCompleteSection, attribute].filter(x => x).join(' ');

  return (
    <Form id={id} defaultTheme={addressFormLayout}>
      <FormField name="email" type="email" label="Email" required gridArea={AddressFormArea.email} />
      <FormField
        name="firstname"
        label="First name"
        required
        autoComplete={getAutoComplete('given-name')}
        gridArea={AddressFormArea.firstName}
      />
      <FormField
        name="lastname"
        label="Last name"
        required
        autoComplete={getAutoComplete('family-name')}
        gridArea={AddressFormArea.lastName}
      />
      <FormField
        name="street"
        label="Street"
        required
        autoComplete={getAutoComplete('street-address')}
        gridArea={AddressFormArea.street}
      />
      <FormField
        name="countryId"
        label="Country"
        required
        autoComplete={getAutoComplete('country')}
        gridArea={AddressForm.country}
      >
        {({ form, field }) => (
          <CountrySelector {...field} items={countries} onChange={x => form.setFieldValue(field.name, x)} />
        )}
      </FormField>
      <FormField
        name="postcode"
        label="Post code"
        required
        autoComplete={getAutoComplete('postal-code')}
        gridArea={AddressFormArea.postCode}
      />
      <FormField
        name="city"
        label="City"
        required
        autoComplete={getAutoComplete('address-level2')}
        gridArea={AddressFormArea.city}
      />
      <FormField
        name="telephone"
        label="Phone"
        required
        autoComplete={getAutoComplete('tel')}
        gridArea={AddressFormArea.phone}
      />
      <Box gridArea={AddressFormArea.submit}>
        <Button type="submit">{submitLabel}</Button>
      </Box>
    </Form>
  );
};

AddressForm.propTypes = {
  id: PropTypes.string.isRequired,
  submitLabel: PropTypes.string,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      localName: PropTypes.string,
      code: PropTypes.string
    })
  )
};

export default AddressForm;
