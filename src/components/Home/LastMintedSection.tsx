import { useState } from 'react';
import Image from "next/image"
import useSWR from 'swr'
import { useUpdateEffect } from 'usehooks-ts';
import cn from 'classnames'

import { API_URL } from '../../config';
import Modal, { useModal } from '../Modal';
import { sectionTitle } from '../Titles';

const fetcher = (path: string) => fetch(API_URL + path).then(res => res.json())

interface NFTItem {
  id: number
  path: string
  openseaUrl: string
}

function LastMintedSection() {
    const { data, error } = useSWR<NFTItem[]>("/last-minted", fetcher)
    const [modalOpen, {openModal, closeModal}] = useModal()
    const [selected, setSelected] = useState<null | NFTItem>(null)

    useUpdateEffect(() => {
      if (selected) openModal()
    }, [selected])

    useUpdateEffect(() => {
      if (!modalOpen) setSelected(null)
    }, [modalOpen])

    if (error || !data) {
      console.log({ error, data });
      return null
    }

    return (
      <section className="max-w-4xl mx-auto my-8 sm:my-12 md:my-16 px-6">
        <h2 className={cn(sectionTitle, "my-4")}>
          last minted dicks
        </h2>

        <ul className="flex flex-wrap -mx-3">
          {data.map(item => (
            <li 
              key={item.id} 
              onClick={() => setSelected(item)} 
              className="cursor-pointer px-3 mb-6 hover:text-purple-300 w-1/2 sm:w-1/4 "
            >
              <div style={{ maxWidth: 300 }} className="relative square overflow-hidden rounded-lg mb">
                <Image src={API_URL + "/svg" + item.path} alt={`SpaceDicks #${item.id}`} layout="fill" />
              </div>
              <span className="font-mono text-sm">
                SpaceDicks #{item.id} 
              </span>
            </li>
          ))}
        </ul>

        {selected && (
          <Modal
            title={`SpaceDicks #${selected.id}`}
            open={modalOpen}
            content={(
              <>
                <div style={{ maxWidth: 500 }} className="relative square m-auto overflow-hidden rounded-lg">
                  <Image quality={90} src={API_URL + "/svg" + selected.path} alt={"SpaceDicks"} layout="fill" />
                </div>
                <p className="font-mono">
                  See open <a href={selected.openseaUrl} target={"_blank"} rel="noreferrer">Opensea</a>.
                </p>
              </>
            )}
            onClose={closeModal}
          />
        )}
      </section>
    )
  }

export default LastMintedSection