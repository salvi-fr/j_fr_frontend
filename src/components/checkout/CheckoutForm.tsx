import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as yup from "yup";
import countryList from "../../data/countryList";
import Button from "../buttons/Button";
import { Card1 } from "../Card1";
import CheckBox from "../CheckBox";
import Grid from "../grid/Grid";
import Select from "../Select";
import TextField from "../text-field/TextField";
import Typography from "../Typography";

const CheckoutForm = () => {
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    console.log(values);
    router.push("/payment");
  };

  const handleCheckboxChange = (
    values: typeof initialValues,
    setFieldValue
  ) => ({ target: { checked } }) => {
    setSameAsShipping(checked);
    setFieldValue("same_as_shipping", checked);
    setFieldValue("billing_name", checked ? values.shipping_name : "");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card1 mb="2rem">
            <Typography fontWeight="600" mb="1rem">
              Shipping Address
            </Typography>

            <Grid container spacing={7}>
              <Grid item sm={6} xs={12}>
                <TextField
                  name="shipping_name"
                  label="Full Name"
                  fullwidth
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_name || ""}
                  errorText={touched.shipping_name && errors.shipping_name}
                />
                <TextField
                  name="shipping_contact"
                  label="Phone Number"
                  fullwidth
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_contact || ""}
                  errorText={
                    touched.shipping_contact && errors.shipping_contact
                  }
                />
                <TextField
                  name="shipping_zip"
                  label="Zip Code"
                  type="number"
                  fullwidth
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_zip || ""}
                  errorText={touched.shipping_zip && errors.shipping_zip}
                />
                <TextField
                  name="shipping_address1"
                  label="Address 1"
                  fullwidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_address1 || ""}
                  errorText={
                    touched.shipping_address1 && errors.shipping_address1
                  }
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  name="shipping_email"
                  label="Email Address"
                  type="email"
                  fullwidth
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_email || ""}
                  errorText={touched.shipping_email && errors.shipping_email}
                />
                <TextField
                  name="shipping_company"
                  label="Company"
                  fullwidth
                  mb="1rem"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_company || ""}
                  errorText={
                    touched.shipping_company && errors.shipping_company
                  }
                />
                <Select
                  mb="1rem"
                  label="Country"
                  options={countryList}
                  value={values.shipping_country || "US"}
                  onChange={(country) => {
                    setFieldValue("shipping_country", country);
                  }}
                  errorText={
                    touched.shipping_country && errors.shipping_country
                  }
                />
                <TextField
                  name="shipping_address2"
                  label="Address 2"
                  fullwidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_address2 || ""}
                  errorText={
                    touched.shipping_address2 && errors.shipping_address2
                  }
                />
              </Grid>
            </Grid>
          </Card1>

          <Card1 mb="2rem">
            <Typography fontWeight="600" mb="1rem">
              Billing Address
            </Typography>

            <CheckBox
              label="Same as shipping address"
              color="secondary"
              mb={sameAsShipping ? "" : "1rem"}
              onChange={handleCheckboxChange(values, setFieldValue)}
            />

            {!sameAsShipping && (
              <Grid container spacing={7}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="billing_name"
                    label="Full Name"
                    fullwidth
                    mb="1rem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_name || ""}
                    errorText={touched.billing_name && errors.billing_name}
                  />
                  <TextField
                    name="billing_contact"
                    label="Phone Number"
                    fullwidth
                    mb="1rem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_contact || ""}
                    errorText={
                      touched.billing_contact && errors.billing_contact
                    }
                  />
                  <TextField
                    name="billing_zip"
                    label="Zip Code"
                    type="number"
                    fullwidth
                    mb="1rem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_zip || ""}
                    errorText={touched.billing_zip && errors.billing_zip}
                  />
                  <TextField
                    name="billing_address1"
                    label="Address 1"
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_address1 || ""}
                    errorText={
                      touched.billing_address1 && errors.billing_address1
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="billing_email"
                    label="Email Address"
                    type="email"
                    fullwidth
                    mb="1rem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_email || ""}
                    errorText={touched.billing_email && errors.billing_email}
                  />
                  <TextField
                    name="billing_company"
                    label="Company"
                    fullwidth
                    mb="1rem"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_company || ""}
                    errorText={
                      touched.billing_company && errors.billing_company
                    }
                  />
                  <Select
                    mb="1rem"
                    label="Country"
                    options={countryList}
                    errorText={
                      touched.billing_country && errors.billing_country
                    }
                  />
                  <TextField
                    name="billing_address2"
                    label="Address 2"
                    fullwidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_address2 || ""}
                    errorText={
                      touched.billing_address2 && errors.billing_address2
                    }
                  />
                </Grid>
              </Grid>
            )}
          </Card1>

          <Grid container spacing={7}>
            <Grid item sm={6} xs={12}>
              <Link href="/cart">
                <Button
                  variant="outlined"
                  color="primary"
                  type="button"
                  fullwidth
                >
                  Back to Cart
                </Button>
              </Link>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullwidth
              >
                Proceed to Payment
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

const initialValues = {
  shipping_name: "",
  shipping_email: "",
  shipping_contact: "",
  shipping_company: "",
  shipping_zip: "",
  shipping_country: "",
  shipping_address1: "",
  shipping_address2: "",

  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_zip: "",
  billing_country: "",
  billing_address1: "",
  billing_address2: "",
};

const checkoutSchema = yup.object().shape({
  // shipping_name: yup.string().required("required"),
  // shipping_email: yup.string().email("invalid email").required("required"),
  // shipping_contact: yup.string().required("required"),
  // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.string().required("required"),
  // billing_address1: yup.string().required("required"),
});

export default CheckoutForm;
