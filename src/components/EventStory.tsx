import React from 'react';
import { Heart, Wine, PartyPopper } from 'lucide-react';

export const EventStory: React.FC = () => {
  return (
    <section id="evento" className="py-16 sm:py-20 bg-[#F6EBD9] border-y border-[#E8D4B8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1B2F4E] mb-6 text-balance">
          Um novo lar, uma nova história!
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-[#3E5070] leading-relaxed max-w-2xl mx-auto mb-10">
          <p>
            Deus tem nos conduzido a novos caminhos, e chegou a hora de viver um sonho muito especial: nosso novo lar!
          </p>
          <p>
            Eu, Pedrinho e Kahlel estamos nos preparando para começar essa nova etapa, cheia de sonhos, descobertas e momentos felizes.
          </p>
          <p>
            Quero celebrar meu aniversário e essa conquista com pessoas especiais que fazem parte da minha história. Será uma alegria ter você conosco nesse momento tão importante!
          </p>
          <p className="font-serif italic text-lg sm:text-xl text-[#1B2F4E]">
            “Mais do que móveis e eletros, o que faz uma casa virar lar são as pessoas que enchem ela de vida, risadas e memórias boas.”
          </p>
        </div>

        {/* 3 Pillars of the celebration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#FBF4E8] p-6 rounded-2xl border border-[#E8D4B8]">
            <div className="w-10 h-10 rounded-xl bg-[#F7E6D0] text-[#CF3B25] flex items-center justify-center mb-4">
              <PartyPopper className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#1B2F4E] mb-2">1. Meu Aniversário</h3>
            <p className="text-sm text-[#4B5A72] leading-relaxed">
              Mais um ciclo de muita beleza, saúde, e tudo que há de bom (glória a Deus), infelizmente mais um ano que não foi decretado feriado então marca na sua agenda!
            </p>
          </div>

          <div className="bg-[#FBF4E8] p-6 rounded-2xl border border-[#E8D4B8]">
            <div className="w-10 h-10 rounded-xl bg-[#F7E6D0] text-[#CF3B25] flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#1B2F4E] mb-2">2. Chá de Casa Nova</h3>
            <p className="text-sm text-[#4B5A72] leading-relaxed">
              Aquela forcinha marota para equipar a cozinha, a sala e não faltar um copo para tomar um suquinho.
            </p>
          </div>

          <div className="bg-[#FBF4E8] p-6 rounded-2xl border border-[#E8D4B8]">
            <div className="w-10 h-10 rounded-xl bg-[#F7E6D0] text-[#CF3B25] flex items-center justify-center mb-4">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#1B2F4E] mb-2">3. Celebrando Conquistas</h3>
            <p className="text-sm text-[#4B5A72] leading-relaxed">
              Porque algumas bênçãos merecem ser comemoradas em grande estilo!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
