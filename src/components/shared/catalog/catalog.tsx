"use client";

import { useEffect } from "react";
import Style from "./catalog.module.scss";
import { useCatalogStore } from "../../../store";
import Category from "../category";
import Skeleton from "../../ui/skeleton/catalog";
import Wrapper from "./wrapper";
import Card from "./card";
import SizeSelectionModal from "../../ui/size-selection-modal";
import Filter from "../filters/filters";
import Container from "./container";

const Catalog: React.FC = () => {
  const catalog = useCatalogStore((state) => state.catalog);
  const isLoading = useCatalogStore((state) => state.isLoading);
  const loadCatalog = useCatalogStore((state) => state.loadCatalog);

  useEffect(() => {
    loadCatalog();
  }, []);

  if (isLoading) {
    return (
      <section className={Style.catalog}>
        <div className="container">
          <div className={Style.content}>
            <aside className={Style.wrapper}>
              <Category />
            </aside>

            <Container>
              <Filter />

              <Wrapper>
                {isLoading &&
                  [...new Array(9)].map((_, index: number) => (
                    <Skeleton
                      className={Style.loader}
                      key={index}
                      width={255}
                      height={380}
                      uniqueKey="1"
                    />
                  ))}
              </Wrapper>
            </Container>

            <SizeSelectionModal />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="catalog" className={Style.catalog}>
      <div className="container">
        <div className={Style.content}>
          <aside className={Style.wrapper}>
            <Category />
          </aside>

          <Container>
            <Filter />

            <Wrapper>
              {catalog.map((item) => (
                <li key={item.id} className={Style.list}>
                  <Card {...item} />
                </li>
              ))}
            </Wrapper>
          </Container>

          <SizeSelectionModal />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
