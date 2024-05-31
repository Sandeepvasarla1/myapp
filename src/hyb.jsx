import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

const AuditoriumForm = () => {
  return (
    <div>
      <h1>Auditorium Form</h1>
      <Formik
        initialValues={{
          name: '',
          seatingCapacity: 0,
          photos: [],
          location: '',
          features: []
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />

            <label htmlFor="seatingCapacity">Seating Capacity</label>
            <Field type="number" name="seatingCapacity" />

            <label htmlFor="photos">Photos</label>
            <FieldArray name="photos">
              {({ push, remove }) => (
                <div>
                  {values.photos.map((_, index) => (
                    <div key={index}>
                      <Field type="text" name={`photos.${index}`} />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    Add Photo
                  </button>
                </div>
              )}
            </FieldArray>

            <label htmlFor="location">Location</label>
            <Field type="text" name="location" />

            <label htmlFor="features">Features</label>
            <FieldArray name="features">
              {({ push, remove }) => (
                <div>
                  {values.features.map((_, index) => (
                    <div key={index}>
                      <Field type="text" name={`features.${index}`} />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push('')}>
                    Add Feature
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuditoriumForm;
