import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableFavoriteCity1687724510358
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE public.favoriteCity (
                id integer primary key NOT NULL,
                cityId character varying NOT NULL,
                cityName character varying NOT NULL,
                userId integer NOT NULL,
                createdAt timestamp without time zone DEFAULT now() NOT NULL,
                updatedAt timestamp without time zone DEFAULT now() NOT NULL
            );

            CREATE SEQUENCE public.favoriteCity_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.favoriteCity_id_seq OWNED BY public.favoriteCity.id;

            ALTER TABLE ONLY public.favoriteCity ALTER COLUMN id SET DEFAULT nextval('public.favoriteCity_id_seq'::regclass);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table public.favoriteCity;
        `);
  }
}
