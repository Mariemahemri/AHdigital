'use client';
import FeatureCard from "@/components/FeatureCard";
import { UserCircleIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"
import Image from 'next/image';
import gif1 from "@/assets/images/gif.gif";
import FramerIcon from "@/assets/images/framer-logo.svg";
import OpenAIcon from "@/assets/images/Openai-logo.svg"
import AirtableIcon from "@/assets/images/airtable-logo.svg"
import { motion } from "framer-motion";



export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container">

        <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-left mt-6 max-w-2xl">
          Nos <span className="text-lime-200">services </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Audit & conseil "
            description="Notre offre d&apos;audit et de conseil est adaptée aux spécificités de votre organisation. Nous réalisons un audit détaillé de vos process et livrons des recommandations personnalisées pour intégrer l’IA de manière optimale."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={gif1}
                alt="GIF illustration"
                width={200}
                height={200}
                className="rounded-xl shadow-xl"
              />
            </div>

          </FeatureCard>

          <FeatureCard
            title="Formations"
            description="Nos formations en IA générative sont conçues pour faciliter son intégration en entreprise. Elles rendent vos équipes opérationnelles rapidement, assurant une adoption efficace au sein de votre organisation."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black/20 border border-white/10 rounded-xl p-4 w-full max-w-md space-y-2"
              >
                {[
                  {
                    icon: FramerIcon,
                    name: "Framer",
                    desc: "Nouveau formulaire de contact",
                    dot: true // Added dot indicator property
                  },
                  {
                    icon: AirtableIcon,
                    name: "Airtable",
                    desc: "Ajouter données à Airtable"
                  },
                  {
                    icon: OpenAIcon,
                    name: "OpenAI",
                    desc: "Écrire un message personnalisé"
                  },
                ].map((tool, idx, array) => (
                  <div key={idx} className="space-y-2">
                    <motion.div
                      whileHover={{ 
                        backgroundColor: 'rgba(58, 89, 63, 0.1)',
                        borderColor: 'rgba(84, 135, 121, 0.2)'
                      }}
                      className="flex items-center gap-3 bg-black/30 hover:bg-white/10 p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-200"
                    >
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={24}
                        height={24}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-white text-sm font-medium">{tool.name}</p>
                          {tool.dot && (
                            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-white/60 text-xs">{tool.desc}</p>
                      </div>
                    </motion.div>
                    
                    {idx < array.length - 1 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 * idx }}
                        className="flex justify-center"
                      >
                       <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white/50 text-xs"
                        style={{
                          backgroundColor: 'rgba(58, 89, 63, 0.1)',
                          border: '1px solid rgba(84, 135, 121, 0.2)'
                        }}
                      >
                        +
                      </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </FeatureCard>

        <FeatureCard
          title="Solutions IA"
          description="Nous concevons des solutions IA sur mesure : agents intelligents, automatisations, applications personnalisées et systèmes vocaux. Chaque projet est pensé pour s’intégrer naturellement à vos outils et répondre à des enjeux métiers concrets."
          className="col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group relative overflow-hidden"
        >
          <motion.div 
            className="aspect-video flex flex-col items-center justify-center p-6"
            initial={false}
            whileHover="hover"
          >
            {/* Default state - Conversation Interface */}
            <motion.div
              className="absolute inset-0 p-6 flex flex-col items-center"
              variants={{
                hover: { opacity: 0, y: -20 }
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full max-w-md space-y-4">
                {/* User Message */}
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <UserCircleIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 flex-1">
                    <p className="text-white font-medium text-sm">Siena Sinner</p>
                    <p className="text-white/70 text-sm mt-1">Résume ce rapport</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start gap-3">
                  <div className="bg-green-400/10 p-2 rounded-full">
                    <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 flex-1">
                    <p className="text-white font-medium text-sm">AI assistant</p>
                    <p className="text-white/70 text-sm mt-1">Bien sûr, voici un résumé:</p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex items-center gap-1 pl-11"
                >
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Hover state - Expanded AI Assistant View */}
            <motion.div
              className="absolute inset-0 p-6 flex flex-col bg-gradient-to-br from-white/5 to-black/20"
              variants={{
                hover: { opacity: 1, y: 0 }
              }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                  <h3 className="text-white font-medium">AI assistant</h3>
                </div>
                
                <div className="text-white/80 text-sm space-y-3">
                  <p>Bien sûr, voici un résumé:</p>
                  <p className="italic bg-white/5 p-3 rounded-lg">
                    Quokka BV experienced a 15% increase in revenue to €120 million from the previous year's...
                  </p>
                </div>
              </div>

              {/* Input section */}
              <div className="mt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Posez votre question..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 pr-10"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </FeatureCard>
        </div>

        
      </div>
    </section>
  );
}
