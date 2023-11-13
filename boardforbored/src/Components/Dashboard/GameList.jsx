import * as React from "react";

export default function GameList(props) {
    return (
        <section className="items-stretch flex w-full justify-between gap-5 mt-28 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a9b9728-1296-4658-b4c5-4d535f3f62e6?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-[0.68] object-contain object-center w-[115px] overflow-hidden"
                />
                <div className="flex items-stretch justify-between gap-0">
                    <div className="justify-center text-black text-lg">Phase 10</div>
                    <div className="justify-center text-black text-right text-lg">$ 3</div>
                </div>
            </div>
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ec29da2-ffaa-4e3e-b0de-4beb6a5a3302?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-square object-contain object-center w-[170px] overflow-hidden"
                />
                <div className="justify-center text-black text-lg">Jaipur</div>
            </div>
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d4d11-3b0f-423a-ad07-faa8719d0e8e?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-square object-contain object-center w-[170px] overflow-hidden"
                />
                <div className="flex items-stretch justify-between gap-0">
                    <div className="justify-center text-black text-lg">Ticket to ride</div>
                    <div className="justify-center text-black text-right text-lg">$ 5</div>
                </div>
            </div>
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0cd9c2af-09a4-45de-90a8-f654b210e5e2?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-square object-contain object-center w-[170px] overflow-hidden"
                />
                <div className="flex items-stretch justify-between gap-0">
                    <div className="justify-center text-black text-lg">Sequence</div>
                    <div className="justify-center text-black text-right text-lg">$ 3</div>
                </div>
            </div>
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c571c0d-2415-4ce0-ab0b-1a85302b47c7?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-square object-contain object-center w-[170px] overflow-hidden"
                />
                <div className="flex items-stretch justify-between gap-0">
                    <div className="justify-center text-black text-lg">Wingspan</div>
                    <div className="justify-center text-black text-right text-lg">$ 5</div>
                </div>
            </div>
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df0db7ee-8bfd-4551-b61a-29aef52c7eac?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-square object-contain object-center w-[170px] overflow-hidden"
                />
                <div className="justify-center text-black text-lg">Ludo</div>
            </div>
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8f2f2565-ab54-411b-9283-c8df80529085?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-square object-contain object-center w-[170px] overflow-hidden"
                />
                <div className="justify-center text-black text-lg">Trails</div>
            </div>
            <div className="bg-yellow-500 bg-opacity-50 flex grow basis-[0%] flex-col items-stretch rounded-md">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecb066f2-f4ef-47f5-b017-cb43b75b9dd5?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-[0.64] object-contain object-center w-[109px] overflow-hidden"
                />
                <div className="justify-center text-black text-lg">Doomlings</div>
            </div>
        </section>
    );
}