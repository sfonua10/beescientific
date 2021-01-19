import React, { useReducer } from 'react';
import Layout from '../components/layout';
import Benefits from '../components/beeBarrel/benefits';
import Button from '../components/button';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  body: '',
  status: 'IDLE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return {
        ...state,
        [action.field]: action.value,
      };

    case 'updateStatus':
      return { ...state, status: action.status };
    case 'reset':
    default:
      return INITIAL_STATE;
  }
};

const Investor = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setStatus = (status) => dispatch({ type: 'updateStatus', status });

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: 'updateFieldValue',
      field,
      value: event.target.value,
    });
  };
console.log('state', state)
const handleSubmit = (event) => {
  event.preventDefault();
  setStatus('PENDING');
  console.log('submitted')
  
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(state),
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    setStatus('SUCCESS');
  })
  .catch((error) => {
    console.error(error);
    setStatus('ERROR');
  });
};

  if (state.status === 'SUCCESS') {
    return (
      <p>
        Message Sent!
        <button type="reset" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </p>
    );
  }

  return (
    <Layout>
      <div className="mx-4 mt-6 md:mx-28 lg:mt-20 lg:mx-auto max-w-4xl">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="images/investor/bees.png"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="images/investor/bees-tab.png"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="images/investor/bees-desk.png"
          />
          <img
            src="images/investor/bees.png"
            className="mb-6 lg:h-desk lg:object-cover lg:object-center lg:w-full"
            alt="Busy bees buzzing around"
          />
        </picture>{' '}
        <Benefits
          title="Become an Investor"
          text="The Bee Barrel is a new beehive designed to improve the environment for the bees and the performance for the beekeeper. We believe the Bee Barrell will revolutionize beekeeping, from the backyard hobbyist to migratory pollinators and commercial honey producers. We hope to reach people who maintain one or more hives and those who operate many more. The Bee Barrel has been prototyped, tested, and patented, and is now ready for manufacture. "
          text2="We hope to reach wide audiences through social media and online stores. Due to the unique nature of the Bee Barrel, we also intend to sell hives through distribution to big box stores, and eventually on a global market as well. "
          text3="We’re also expanding our product offerings, with services and accessories. These will include stands, extractors, and equipment. We plan to offer sensors and other devices for advanced monitoring, barrel maintenance, apiary management, and risk assessment."
          text4="We are currently looking for the right investors for this innovative and unique beehive system. We’re seeking single/first round seed funding for pre-production expenses. If you reside or operate in the United States and are passionate about saving honey bees, we would love to hear from you!"
        />
        <h3 className="text-lg font-extrabold mt-4 pb-2 md:text-2xl">
          Contact Us
        </h3>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <label className="flex flex-col mb-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={state.name}
              onChange={updateFieldValue('name')}
              className="box-border rounded-sm border-dark-black border-1 h-8"
            />
          </label>
          <label className="flex flex-col mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={state.email}
              onChange={updateFieldValue('email')}
              className="rounded-sm border-dark-black border-1 h-8"
            />
          </label>
          <label className="flex flex-col mb-5">
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={state.phone}
              onChange={updateFieldValue('phone')}
              className="rounded-sm border-dark-black border-1 h-8"
            />
          </label>
          <label className="flex flex-col mb-5">
            <textarea
              type="body"
              name="body"
              id="body"
              placeholder="Message"
              rows="10"
              value={state.body}
              onChange={updateFieldValue('body')}
              className="rounded-sm border-dark-black border-1"
            />
          </label>
          <div className="self-center mb-12 lg:self-end">
            <button>SEND</button>
            {/* <Button text="SUBMIT" /> */}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Investor;
