'use client';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { PageTransition } from '../atoms/PageTransition';
import { AnimatePresence } from 'framer-motion';

export default function ArchitectureReport() {
  const technologies = [
    'Next.js',
    'Elysia',
    'FastAPI',
    'Google Cloud',
    'React',
    'Drizzle',
    'scikit-learn',
    'OpenCV',
    'Seaborn',
  ];

  return (
    <AnimatePresence>
      <PageTransition>
        <div className="flex flex-col min-h-screen w-full items-center justify-center mx-auto noise-bg-primary">
        <main className="flex-1">
        <section className="w-full py-12 md:py-12 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Architectural Report
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-primary text-primary-foreground notranslate"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-4 md:py-24 lg:py-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Entity Relationship Diagram
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Data Model
                </h2>
                <p className="max-w-[900px]  text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The data model consists of two main tables: books and processed_images.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 md:pl-24">
              <Image
                width={200}
                height={200}
                src="/architecture/data-model.svg"
                alt="Data Model Diagram"
                className="mx-auto rounded-xl object-cover object-center sm:w-full lg:order-last max-w-2xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Data Processing and Model Training
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Data Processing Workflow
                </h2>
                <p className="max-w-[900px]  text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The workflow for processing data and training the model involves several steps, from downloading the dataset to saving the trained model.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/architecture/data-processing.svg"
                width={300}
                height={262}
                alt="Data Processing Workflow"
                className="mx-auto rounded-xl object-cover object-center sm:w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Feature Extraction
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Feature Extraction Process
                </h2>
                <p className="max-w-[900px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The feature extraction process involves detecting faces in images and extracting relevant features for visual impairment prediction.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/architecture/feature-extraction.svg"
                width={300}
                height={262}
                alt="Feature Extraction Process"
                className="mx-auto rounded-xl object-cover object-center sm:w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Content Adaptation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Content Adaptation Workflow
                </h2>
                <p className="max-w-[900px]  text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The content adaptation process uses extracted features to predict visual impairment levels and provide recommendations for content adjustments.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/architecture/content-adaption.svg"
                width={300}
                height={262}
                alt="Content Adaptation Workflow"
                className="mx-auto rounded-xl object-cover object-center sm:w-full max-w-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Overall System Flow
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  System Basic Architecture
                </h2>
                <p className="max-w-[900px]  text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The overall system flow combines image processing, machine learning, and content adaptation to provide personalized recommendations for users with visual impairments.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/architecture/overall.svg"
                width={300}
                height={262}
                alt="Overall System Architecture"
                className="mx-auto rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Reinforcement Learning
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Feedback-Driven Improvement
                </h2>
                <p className="max-w-[900px] text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our system implements a reinforcement learning approach, continuously improving through user feedback.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/architecture/reinforcement.svg"
                width={600}
                height={1000}
                alt="Reinforcement Learning Process"
                className="mx-auto rounded-xl object-cover object-center sm:w-full"
              />
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                The reinforcement process begins with user interaction and flows through our system, 
                collecting feedback, updating our database, and refining our ML model. This cycle 
                ensures continuous improvement in our visual impairment predictions and content adaptations.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </PageTransition>
    </AnimatePresence>
  );
}
