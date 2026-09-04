import { motion } from '@/lib/nomotion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-background flex items-center justify-center relative py-0 overflow-hidden">
      {/* إضاءة خلفية خفيفة */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="fluid-h1 font-bold text-primary mb-6 md:mb-8 px-2 sm:px-4"
          >
            Performance Digital Marketer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="fluid-lead text-foreground max-w-3xl mx-auto px-2 sm:px-4"
          >
            ببني سيستم متكامل يحول الترافيك لعملاء فعليين
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
