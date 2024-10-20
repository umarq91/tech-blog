import Image from 'next/image';
import { motion } from 'framer-motion';

const CoreValuesSection = () => {
  const coreValues = [
    {
      title: 'Quality',
      description: 'Delivering excellence in every aspect with a focus on providing the best to our clients.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7wEW0LACmFwgu2XVpVHmeHM9wCC4rCP6Ug&s', // Replace with actual image path
    },
    {
      title: 'Agility',
      description: 'Adapting swiftly to change with flexibility and continuous improvement.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eAl5Y-FvR9ubCMpOE8y7ZOkQFbeci78DeA&s',
    },
    {
      title: 'Partnership',
      description: 'Building strong, long-lasting relationships to foster mutual growth and success.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjhBV58pBp2GyncMZxZzGaoOO2AGZ7oI_og&s',
    },
    {
      title: 'Innovation',
      description: 'Driving forward with creativity and forward-thinking solutions.',
      imgSrc: 'https://e7.pngegg.com/pngimages/451/218/png-clipart-idea-art-computer-icons-creativity-innovation-icon-design-intellectual-text-hand.png',
    },
    {
      title: 'Data-driven',
      description: 'Making informed decisions based on data insights and analytics.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJyFDH4JI1Mw9hVPH6qZPJ_FmnGSujvOB9Q&s',
    },
    {
      title: 'Excellence',
      description: 'Setting the highest standards in every project we undertake.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbUAdggz6sDcdnND89UqFxWAl0kjdpmT0OQ&s',
    },
  ];

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Core Values</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our core values define who we are and guide us in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Initial state
              animate={{ opacity: 1, y: 0 }}   // Animate to visible
              exit={{ opacity: 0, y: 20 }}      // Exit animation
              transition={{ duration: 0.5 }}     // Transition duration
              className="overflow-hidden bg-white rounded shadow hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-8">
                <div className="flex items-center">
                  <Image
                    className="flex-shrink-0 w-12 h-auto"
                    src={value.imgSrc}
                    alt={value.title}
                    width={48}
                    height={48}
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-semibold text-black">{value.title}</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-gray-600 mt-7">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CoreValuesSection;
