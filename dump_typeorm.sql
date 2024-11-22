--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: aprende; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aprende (
    id integer NOT NULL,
    level_learned_at integer,
    metodo character varying(50),
    version_group character varying(50),
    move_id integer,
    pokemon_id integer
);


ALTER TABLE public.aprende OWNER TO postgres;

--
-- Name: aprende_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.aprende_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.aprende_id_seq OWNER TO postgres;

--
-- Name: aprende_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.aprende_id_seq OWNED BY public.aprende.id;


--
-- Name: area; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.area (
    nome character varying(50),
    location character varying(50),
    region character varying(50),
    id character varying(50) NOT NULL
);


ALTER TABLE public.area OWNER TO postgres;

--
-- Name: atributo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.atributo (
    id integer NOT NULL,
    nome character varying(50),
    descricao text
);


ALTER TABLE public.atributo OWNER TO postgres;

--
-- Name: battle_style_preference; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.battle_style_preference (
    id integer NOT NULL,
    high_hp_preference integer,
    low_hp_preference integer,
    battle_style_id integer,
    nature_id integer
);


ALTER TABLE public.battle_style_preference OWNER TO postgres;

--
-- Name: battle_style_preference_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.battle_style_preference_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.battle_style_preference_id_seq OWNER TO postgres;

--
-- Name: battle_style_preference_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.battle_style_preference_id_seq OWNED BY public.battle_style_preference.id;


--
-- Name: berry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.berry (
    id integer NOT NULL,
    nome character varying(50),
    natural_gift_type character varying(50),
    natural_gift_power integer,
    max_harvest integer,
    size integer,
    smoothness integer,
    soil_dryness integer,
    growth_time integer,
    firmness character varying(50),
    item_id integer
);


ALTER TABLE public.berry OWNER TO postgres;

--
-- Name: berry_flavor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.berry_flavor (
    id integer NOT NULL,
    potency integer,
    berry_id integer,
    flavor_id integer
);


ALTER TABLE public.berry_flavor OWNER TO postgres;

--
-- Name: berry_flavor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.berry_flavor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.berry_flavor_id_seq OWNER TO postgres;

--
-- Name: berry_flavor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.berry_flavor_id_seq OWNED BY public.berry_flavor.id;


--
-- Name: caracteristica; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.caracteristica (
    id integer NOT NULL,
    descricao text,
    gene_modulo integer,
    possible_values integer[],
    stat_id integer
);


ALTER TABLE public.caracteristica OWNER TO postgres;

--
-- Name: caracteristica_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.caracteristica_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.caracteristica_id_seq OWNER TO postgres;

--
-- Name: caracteristica_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.caracteristica_id_seq OWNED BY public.caracteristica.id;


--
-- Name: catalogo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.catalogo (
    id integer NOT NULL,
    entry_number integer,
    pokedex_id integer,
    especie_id integer
);


ALTER TABLE public.catalogo OWNER TO postgres;

--
-- Name: catalogo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.catalogo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.catalogo_id_seq OWNER TO postgres;

--
-- Name: catalogo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.catalogo_id_seq OWNED BY public.catalogo.id;


--
-- Name: contest_combo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contest_combo (
    id integer NOT NULL,
    contest_type character varying(50),
    first_move_id integer,
    second_move_id integer
);


ALTER TABLE public.contest_combo OWNER TO postgres;

--
-- Name: contest_combo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contest_combo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contest_combo_id_seq OWNER TO postgres;

--
-- Name: contest_combo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contest_combo_id_seq OWNED BY public.contest_combo.id;


--
-- Name: contest_effect; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contest_effect (
    id integer NOT NULL,
    appeal integer,
    jam integer,
    effect text,
    flavor_text_entry text
);


ALTER TABLE public.contest_effect OWNER TO postgres;

--
-- Name: egg_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.egg_group (
    especie_id integer NOT NULL,
    nome character varying(50) NOT NULL
);


ALTER TABLE public.egg_group OWNER TO postgres;

--
-- Name: encounter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.encounter (
    id integer NOT NULL,
    min_level integer,
    max_level integer,
    chance integer,
    metodo character varying(50),
    version character varying(50),
    max_chance integer,
    pokemon_id integer,
    area_id character varying(50)
);


ALTER TABLE public.encounter OWNER TO postgres;

--
-- Name: encounter_condition; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.encounter_condition (
    encounter_id integer NOT NULL,
    condition character varying(50) NOT NULL
);


ALTER TABLE public.encounter_condition OWNER TO postgres;

--
-- Name: especie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.especie (
    nome character varying(50),
    id integer NOT NULL,
    base_happiness integer,
    capture_rate integer,
    gender_rate integer,
    ordem integer,
    hatch_counter integer,
    cor character varying(50),
    habitat character varying(50),
    generation character varying(50),
    formato character varying(50),
    has_gender_differences boolean,
    is_baby boolean,
    is_mythical boolean,
    is_legendary boolean,
    forms_switchable boolean,
    especie_flavor_text_id integer,
    growth_rate_id integer
);


ALTER TABLE public.especie OWNER TO postgres;

--
-- Name: especie_flavor_text; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.especie_flavor_text (
    especie_id integer NOT NULL,
    version character varying(50) NOT NULL,
    language character varying(50) NOT NULL,
    flavor_text text
);


ALTER TABLE public.especie_flavor_text OWNER TO postgres;

--
-- Name: evolucao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evolucao (
    id integer NOT NULL,
    location integer,
    trigger character varying(50),
    genero character varying(50),
    min_affection integer,
    min_beauty integer,
    min_happiness integer,
    min_level integer,
    needs_overworld_rain boolean,
    relative_physical_stats integer,
    time_of_day character varying(50),
    turn_upside_down boolean,
    held_item integer,
    known_move_id integer,
    especie_anterior integer,
    especie_evoluida integer,
    known_move_type integer,
    party_species integer,
    party_type integer,
    trade_species integer,
    area_id character varying(50)
);


ALTER TABLE public.evolucao OWNER TO postgres;

--
-- Name: evolucao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.evolucao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.evolucao_id_seq OWNER TO postgres;

--
-- Name: evolucao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.evolucao_id_seq OWNED BY public.evolucao.id;


--
-- Name: flavor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flavor (
    id integer NOT NULL,
    nome character varying(50),
    contest_type character varying(50)
);


ALTER TABLE public.flavor OWNER TO postgres;

--
-- Name: genero; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genero (
    pokemon_especie integer NOT NULL,
    lingua character varying(50) NOT NULL,
    genero character varying(50)
);


ALTER TABLE public.genero OWNER TO postgres;

--
-- Name: growth_rate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.growth_rate (
    id integer NOT NULL,
    nome character varying(50),
    levels integer[],
    formula character varying(50)
);


ALTER TABLE public.growth_rate OWNER TO postgres;

--
-- Name: habilidade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.habilidade (
    id integer NOT NULL,
    nome character varying(50),
    generation character varying(50),
    is_main_series boolean
);


ALTER TABLE public.habilidade OWNER TO postgres;

--
-- Name: habilidade_effect_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.habilidade_effect_entry (
    habilidade_id integer NOT NULL,
    version_group character varying(50) NOT NULL,
    language character varying(50) NOT NULL,
    effect text,
    short_effect text
);


ALTER TABLE public.habilidade_effect_entry OWNER TO postgres;

--
-- Name: habilidade_flavor_text_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.habilidade_flavor_text_entry (
    habilidade_id integer NOT NULL,
    version_group character varying(50) NOT NULL,
    language character varying(50) NOT NULL,
    flavor_text text
);


ALTER TABLE public.habilidade_flavor_text_entry OWNER TO postgres;

--
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    nome character varying(50),
    custo integer,
    fling_power integer,
    fling_effect character varying(50),
    category character varying(50),
    pocket character varying(50),
    sprite text,
    baby_trigger_especie integer
);


ALTER TABLE public.item OWNER TO postgres;

--
-- Name: item_atributo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_atributo (
    id integer NOT NULL,
    atributo_id integer,
    item_id integer
);


ALTER TABLE public.item_atributo OWNER TO postgres;

--
-- Name: item_atributo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_atributo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.item_atributo_id_seq OWNER TO postgres;

--
-- Name: item_atributo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_atributo_id_seq OWNED BY public.item_atributo.id;


--
-- Name: item_effect_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_effect_entry (
    id integer NOT NULL,
    effect text,
    short_effect text,
    item_id integer
);


ALTER TABLE public.item_effect_entry OWNER TO postgres;

--
-- Name: item_flavor_text_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_flavor_text_entry (
    id integer NOT NULL,
    version_group character varying(50),
    flavor_text text,
    language character varying(50),
    item_id integer
);


ALTER TABLE public.item_flavor_text_entry OWNER TO postgres;

--
-- Name: item_game_index; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_game_index (
    id integer NOT NULL,
    generation integer,
    game_index integer,
    item_id integer
);


ALTER TABLE public.item_game_index OWNER TO postgres;

--
-- Name: item_game_index_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_game_index_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.item_game_index_id_seq OWNER TO postgres;

--
-- Name: item_game_index_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_game_index_id_seq OWNED BY public.item_game_index.id;


--
-- Name: item_segurado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_segurado (
    id integer NOT NULL,
    version character varying(50),
    rarity integer,
    item_id integer,
    pokemon_id integer
);


ALTER TABLE public.item_segurado OWNER TO postgres;

--
-- Name: machine; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.machine (
    id integer NOT NULL,
    version_group character varying(50),
    item_id integer,
    movimento_id integer
);


ALTER TABLE public.machine OWNER TO postgres;

--
-- Name: modifica; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modifica (
    id integer NOT NULL,
    change integer,
    movimento_id integer,
    stat_id integer
);


ALTER TABLE public.modifica OWNER TO postgres;

--
-- Name: modifica_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modifica_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modifica_id_seq OWNER TO postgres;

--
-- Name: modifica_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modifica_id_seq OWNED BY public.modifica.id;


--
-- Name: move_battle_style; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.move_battle_style (
    id integer NOT NULL,
    nome character varying(50)
);


ALTER TABLE public.move_battle_style OWNER TO postgres;

--
-- Name: move_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.move_category (
    nome character varying(50) NOT NULL,
    descricao text
);


ALTER TABLE public.move_category OWNER TO postgres;

--
-- Name: move_damage_class; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.move_damage_class (
    nome character varying(50) NOT NULL,
    descricao character varying(50)
);


ALTER TABLE public.move_damage_class OWNER TO postgres;

--
-- Name: move_effect_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.move_effect_entry (
    id integer NOT NULL,
    effect text,
    short_effect text,
    move_id integer
);


ALTER TABLE public.move_effect_entry OWNER TO postgres;

--
-- Name: move_effect_entry_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.move_effect_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.move_effect_entry_id_seq OWNER TO postgres;

--
-- Name: move_effect_entry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.move_effect_entry_id_seq OWNED BY public.move_effect_entry.id;


--
-- Name: move_flavor_text_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.move_flavor_text_entry (
    id integer NOT NULL,
    flavor_text text,
    language character varying(50),
    version_group character varying(50),
    move_id integer
);


ALTER TABLE public.move_flavor_text_entry OWNER TO postgres;

--
-- Name: move_flavor_text_entry_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.move_flavor_text_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.move_flavor_text_entry_id_seq OWNER TO postgres;

--
-- Name: move_flavor_text_entry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.move_flavor_text_entry_id_seq OWNED BY public.move_flavor_text_entry.id;


--
-- Name: move_target; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.move_target (
    nome character varying(50) NOT NULL,
    descricao text
);


ALTER TABLE public.move_target OWNER TO postgres;

--
-- Name: movimento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimento (
    id integer NOT NULL,
    nome character varying(50),
    accuracy integer,
    priority integer,
    pp integer,
    power integer,
    effect_chance integer,
    contest_type character varying(50),
    generation character varying(50),
    contest_effect integer,
    damage_class character varying(50),
    target character varying(50),
    tipo_id integer
);


ALTER TABLE public.movimento OWNER TO postgres;

--
-- Name: movimento_meta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimento_meta (
    id integer NOT NULL,
    ailment character varying(50),
    crit_rate integer,
    drain integer,
    flinch_chance integer,
    healing integer,
    max_hits integer,
    min_hits integer,
    max_turns integer,
    stat_chance integer,
    category character varying(50),
    movimento_id integer
);


ALTER TABLE public.movimento_meta OWNER TO postgres;

--
-- Name: movimento_meta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movimento_meta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movimento_meta_id_seq OWNER TO postgres;

--
-- Name: movimento_meta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movimento_meta_id_seq OWNED BY public.movimento_meta.id;


--
-- Name: movimento_past_values; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimento_past_values (
    id integer NOT NULL,
    accuracy integer,
    power integer,
    pp integer,
    effect_chance integer,
    tipo_id integer,
    version_group integer,
    movimento_id integer
);


ALTER TABLE public.movimento_past_values OWNER TO postgres;

--
-- Name: movimento_past_values_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movimento_past_values_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movimento_past_values_id_seq OWNER TO postgres;

--
-- Name: movimento_past_values_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movimento_past_values_id_seq OWNED BY public.movimento_past_values.id;


--
-- Name: nature; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nature (
    id integer NOT NULL,
    nome character varying(50),
    likes_flavor_id integer,
    stat_aumentado_id integer,
    stat_diminuido_id integer
);


ALTER TABLE public.nature OWNER TO postgres;

--
-- Name: pal_park_encounter; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pal_park_encounter (
    id integer NOT NULL,
    nome character varying(50),
    base_score integer,
    rate integer,
    especie_id integer
);


ALTER TABLE public.pal_park_encounter OWNER TO postgres;

--
-- Name: pokeathlon_stat_change; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokeathlon_stat_change (
    nature_id integer NOT NULL,
    stat character varying(50) NOT NULL,
    max_change integer
);


ALTER TABLE public.pokeathlon_stat_change OWNER TO postgres;

--
-- Name: pokedex; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokedex (
    id integer NOT NULL,
    nome character varying(50),
    is_main_series boolean,
    region character varying(50),
    descricao text
);


ALTER TABLE public.pokedex OWNER TO postgres;

--
-- Name: pokemon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon (
    nome character varying(50),
    id integer NOT NULL,
    base_experience integer,
    is_default boolean,
    peso integer,
    altura integer,
    ordem integer,
    latest_cry text,
    legacy_cry text,
    especie_id integer
);


ALTER TABLE public.pokemon OWNER TO postgres;

--
-- Name: pokemon_habilidade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon_habilidade (
    id integer NOT NULL,
    version_group character varying(50),
    slot integer,
    is_hidden boolean,
    habilidade_id integer,
    pokemon_id integer
);


ALTER TABLE public.pokemon_habilidade OWNER TO postgres;

--
-- Name: pokemon_habilidade_antiga; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon_habilidade_antiga (
    id integer NOT NULL,
    generation character varying(50),
    is_hidden boolean,
    slot integer,
    habilidade_id integer,
    pokemon_id integer
);


ALTER TABLE public.pokemon_habilidade_antiga OWNER TO postgres;

--
-- Name: pokemon_habilidade_antiga_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_habilidade_antiga_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pokemon_habilidade_antiga_id_seq OWNER TO postgres;

--
-- Name: pokemon_habilidade_antiga_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_habilidade_antiga_id_seq OWNED BY public.pokemon_habilidade_antiga.id;


--
-- Name: pokemon_habilidade_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_habilidade_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pokemon_habilidade_id_seq OWNER TO postgres;

--
-- Name: pokemon_habilidade_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_habilidade_id_seq OWNED BY public.pokemon_habilidade.id;


--
-- Name: pokemon_stat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon_stat (
    id integer NOT NULL,
    base_sat integer,
    effort integer,
    stat_id integer,
    pokemon_id integer
);


ALTER TABLE public.pokemon_stat OWNER TO postgres;

--
-- Name: pokemon_stat_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_stat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pokemon_stat_id_seq OWNER TO postgres;

--
-- Name: pokemon_stat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_stat_id_seq OWNED BY public.pokemon_stat.id;


--
-- Name: pokemon_tipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon_tipo (
    id integer NOT NULL,
    pokemon_id integer,
    tipo_id integer
);


ALTER TABLE public.pokemon_tipo OWNER TO postgres;

--
-- Name: pokemon_tipo_antigo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon_tipo_antigo (
    pokemon_id integer NOT NULL,
    generation character varying(50),
    tipo_id integer
);


ALTER TABLE public.pokemon_tipo_antigo OWNER TO postgres;

--
-- Name: pokemon_tipo_antigo_pokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_tipo_antigo_pokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pokemon_tipo_antigo_pokemon_id_seq OWNER TO postgres;

--
-- Name: pokemon_tipo_antigo_pokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_tipo_antigo_pokemon_id_seq OWNED BY public.pokemon_tipo_antigo.pokemon_id;


--
-- Name: pokemon_tipo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_tipo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pokemon_tipo_id_seq OWNER TO postgres;

--
-- Name: pokemon_tipo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_tipo_id_seq OWNED BY public.pokemon_tipo.id;


--
-- Name: sprite_pokemon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sprite_pokemon (
    id integer NOT NULL,
    back_default text,
    back_female text,
    back_shiny text,
    back_shiny_female text,
    front_default text,
    front_shiny text,
    front_female text,
    front_shiny_female text,
    pokemon_id integer
);


ALTER TABLE public.sprite_pokemon OWNER TO postgres;

--
-- Name: sprite_pokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sprite_pokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sprite_pokemon_id_seq OWNER TO postgres;

--
-- Name: sprite_pokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sprite_pokemon_id_seq OWNED BY public.sprite_pokemon.id;


--
-- Name: stat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stat (
    id integer NOT NULL,
    nome character varying(50),
    is_battle_only boolean,
    game_index integer,
    damage_class character varying(50)
);


ALTER TABLE public.stat OWNER TO postgres;

--
-- Name: tipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo (
    nome character varying(50),
    id integer NOT NULL,
    move_damage_class character varying(50),
    generation character varying(50)
);


ALTER TABLE public.tipo OWNER TO postgres;

--
-- Name: tipo_efetividade; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_efetividade (
    id integer NOT NULL,
    relacao character varying(50),
    tipo_alvo_id integer,
    tipo_atancante_id integer
);


ALTER TABLE public.tipo_efetividade OWNER TO postgres;

--
-- Name: tipo_efetividade_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_efetividade_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tipo_efetividade_id_seq OWNER TO postgres;

--
-- Name: tipo_efetividade_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_efetividade_id_seq OWNED BY public.tipo_efetividade.id;


--
-- Name: aprende id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprende ALTER COLUMN id SET DEFAULT nextval('public.aprende_id_seq'::regclass);


--
-- Name: battle_style_preference id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battle_style_preference ALTER COLUMN id SET DEFAULT nextval('public.battle_style_preference_id_seq'::regclass);


--
-- Name: berry_flavor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.berry_flavor ALTER COLUMN id SET DEFAULT nextval('public.berry_flavor_id_seq'::regclass);


--
-- Name: caracteristica id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.caracteristica ALTER COLUMN id SET DEFAULT nextval('public.caracteristica_id_seq'::regclass);


--
-- Name: catalogo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalogo ALTER COLUMN id SET DEFAULT nextval('public.catalogo_id_seq'::regclass);


--
-- Name: contest_combo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contest_combo ALTER COLUMN id SET DEFAULT nextval('public.contest_combo_id_seq'::regclass);


--
-- Name: evolucao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao ALTER COLUMN id SET DEFAULT nextval('public.evolucao_id_seq'::regclass);


--
-- Name: item_atributo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_atributo ALTER COLUMN id SET DEFAULT nextval('public.item_atributo_id_seq'::regclass);


--
-- Name: item_game_index id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_game_index ALTER COLUMN id SET DEFAULT nextval('public.item_game_index_id_seq'::regclass);


--
-- Name: modifica id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifica ALTER COLUMN id SET DEFAULT nextval('public.modifica_id_seq'::regclass);


--
-- Name: move_effect_entry id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_effect_entry ALTER COLUMN id SET DEFAULT nextval('public.move_effect_entry_id_seq'::regclass);


--
-- Name: move_flavor_text_entry id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_flavor_text_entry ALTER COLUMN id SET DEFAULT nextval('public.move_flavor_text_entry_id_seq'::regclass);


--
-- Name: movimento_meta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento_meta ALTER COLUMN id SET DEFAULT nextval('public.movimento_meta_id_seq'::regclass);


--
-- Name: movimento_past_values id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento_past_values ALTER COLUMN id SET DEFAULT nextval('public.movimento_past_values_id_seq'::regclass);


--
-- Name: pokemon_habilidade id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade ALTER COLUMN id SET DEFAULT nextval('public.pokemon_habilidade_id_seq'::regclass);


--
-- Name: pokemon_habilidade_antiga id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade_antiga ALTER COLUMN id SET DEFAULT nextval('public.pokemon_habilidade_antiga_id_seq'::regclass);


--
-- Name: pokemon_stat id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_stat ALTER COLUMN id SET DEFAULT nextval('public.pokemon_stat_id_seq'::regclass);


--
-- Name: pokemon_tipo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo ALTER COLUMN id SET DEFAULT nextval('public.pokemon_tipo_id_seq'::regclass);


--
-- Name: pokemon_tipo_antigo pokemon_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo_antigo ALTER COLUMN pokemon_id SET DEFAULT nextval('public.pokemon_tipo_antigo_pokemon_id_seq'::regclass);


--
-- Name: sprite_pokemon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sprite_pokemon ALTER COLUMN id SET DEFAULT nextval('public.sprite_pokemon_id_seq'::regclass);


--
-- Name: tipo_efetividade id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_efetividade ALTER COLUMN id SET DEFAULT nextval('public.tipo_efetividade_id_seq'::regclass);


--
-- Data for Name: aprende; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aprende (id, level_learned_at, metodo, version_group, move_id, pokemon_id) FROM stdin;
\.


--
-- Data for Name: area; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.area (nome, location, region, id) FROM stdin;
\.


--
-- Data for Name: atributo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.atributo (id, nome, descricao) FROM stdin;
\.


--
-- Data for Name: battle_style_preference; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.battle_style_preference (id, high_hp_preference, low_hp_preference, battle_style_id, nature_id) FROM stdin;
\.


--
-- Data for Name: berry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.berry (id, nome, natural_gift_type, natural_gift_power, max_harvest, size, smoothness, soil_dryness, growth_time, firmness, item_id) FROM stdin;
\.


--
-- Data for Name: berry_flavor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.berry_flavor (id, potency, berry_id, flavor_id) FROM stdin;
\.


--
-- Data for Name: caracteristica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.caracteristica (id, descricao, gene_modulo, possible_values, stat_id) FROM stdin;
\.


--
-- Data for Name: catalogo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catalogo (id, entry_number, pokedex_id, especie_id) FROM stdin;
\.


--
-- Data for Name: contest_combo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contest_combo (id, contest_type, first_move_id, second_move_id) FROM stdin;
\.


--
-- Data for Name: contest_effect; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contest_effect (id, appeal, jam, effect, flavor_text_entry) FROM stdin;
\.


--
-- Data for Name: egg_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.egg_group (especie_id, nome) FROM stdin;
\.


--
-- Data for Name: encounter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.encounter (id, min_level, max_level, chance, metodo, version, max_chance, pokemon_id, area_id) FROM stdin;
\.


--
-- Data for Name: encounter_condition; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.encounter_condition (encounter_id, condition) FROM stdin;
\.


--
-- Data for Name: especie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.especie (nome, id, base_happiness, capture_rate, gender_rate, ordem, hatch_counter, cor, habitat, generation, formato, has_gender_differences, is_baby, is_mythical, is_legendary, forms_switchable, especie_flavor_text_id, growth_rate_id) FROM stdin;
\.


--
-- Data for Name: especie_flavor_text; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.especie_flavor_text (especie_id, version, language, flavor_text) FROM stdin;
\.


--
-- Data for Name: evolucao; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evolucao (id, location, trigger, genero, min_affection, min_beauty, min_happiness, min_level, needs_overworld_rain, relative_physical_stats, time_of_day, turn_upside_down, held_item, known_move_id, especie_anterior, especie_evoluida, known_move_type, party_species, party_type, trade_species, area_id) FROM stdin;
\.


--
-- Data for Name: flavor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flavor (id, nome, contest_type) FROM stdin;
\.


--
-- Data for Name: genero; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.genero (pokemon_especie, lingua, genero) FROM stdin;
\.


--
-- Data for Name: growth_rate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.growth_rate (id, nome, levels, formula) FROM stdin;
\.


--
-- Data for Name: habilidade; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.habilidade (id, nome, generation, is_main_series) FROM stdin;
\.


--
-- Data for Name: habilidade_effect_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.habilidade_effect_entry (habilidade_id, version_group, language, effect, short_effect) FROM stdin;
\.


--
-- Data for Name: habilidade_flavor_text_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.habilidade_flavor_text_entry (habilidade_id, version_group, language, flavor_text) FROM stdin;
\.


--
-- Data for Name: item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item (id, nome, custo, fling_power, fling_effect, category, pocket, sprite, baby_trigger_especie) FROM stdin;
\.


--
-- Data for Name: item_atributo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_atributo (id, atributo_id, item_id) FROM stdin;
\.


--
-- Data for Name: item_effect_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_effect_entry (id, effect, short_effect, item_id) FROM stdin;
\.


--
-- Data for Name: item_flavor_text_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_flavor_text_entry (id, version_group, flavor_text, language, item_id) FROM stdin;
\.


--
-- Data for Name: item_game_index; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_game_index (id, generation, game_index, item_id) FROM stdin;
\.


--
-- Data for Name: item_segurado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_segurado (id, version, rarity, item_id, pokemon_id) FROM stdin;
\.


--
-- Data for Name: machine; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.machine (id, version_group, item_id, movimento_id) FROM stdin;
\.


--
-- Data for Name: modifica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modifica (id, change, movimento_id, stat_id) FROM stdin;
\.


--
-- Data for Name: move_battle_style; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.move_battle_style (id, nome) FROM stdin;
\.


--
-- Data for Name: move_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.move_category (nome, descricao) FROM stdin;
\.


--
-- Data for Name: move_damage_class; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.move_damage_class (nome, descricao) FROM stdin;
\.


--
-- Data for Name: move_effect_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.move_effect_entry (id, effect, short_effect, move_id) FROM stdin;
\.


--
-- Data for Name: move_flavor_text_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.move_flavor_text_entry (id, flavor_text, language, version_group, move_id) FROM stdin;
\.


--
-- Data for Name: move_target; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.move_target (nome, descricao) FROM stdin;
\.


--
-- Data for Name: movimento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimento (id, nome, accuracy, priority, pp, power, effect_chance, contest_type, generation, contest_effect, damage_class, target, tipo_id) FROM stdin;
\.


--
-- Data for Name: movimento_meta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimento_meta (id, ailment, crit_rate, drain, flinch_chance, healing, max_hits, min_hits, max_turns, stat_chance, category, movimento_id) FROM stdin;
\.


--
-- Data for Name: movimento_past_values; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimento_past_values (id, accuracy, power, pp, effect_chance, tipo_id, version_group, movimento_id) FROM stdin;
\.


--
-- Data for Name: nature; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nature (id, nome, likes_flavor_id, stat_aumentado_id, stat_diminuido_id) FROM stdin;
\.


--
-- Data for Name: pal_park_encounter; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pal_park_encounter (id, nome, base_score, rate, especie_id) FROM stdin;
\.


--
-- Data for Name: pokeathlon_stat_change; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokeathlon_stat_change (nature_id, stat, max_change) FROM stdin;
\.


--
-- Data for Name: pokedex; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokedex (id, nome, is_main_series, region, descricao) FROM stdin;
\.


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon (nome, id, base_experience, is_default, peso, altura, ordem, latest_cry, legacy_cry, especie_id) FROM stdin;
\.


--
-- Data for Name: pokemon_habilidade; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon_habilidade (id, version_group, slot, is_hidden, habilidade_id, pokemon_id) FROM stdin;
\.


--
-- Data for Name: pokemon_habilidade_antiga; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon_habilidade_antiga (id, generation, is_hidden, slot, habilidade_id, pokemon_id) FROM stdin;
\.


--
-- Data for Name: pokemon_stat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon_stat (id, base_sat, effort, stat_id, pokemon_id) FROM stdin;
\.


--
-- Data for Name: pokemon_tipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon_tipo (id, pokemon_id, tipo_id) FROM stdin;
\.


--
-- Data for Name: pokemon_tipo_antigo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon_tipo_antigo (pokemon_id, generation, tipo_id) FROM stdin;
\.


--
-- Data for Name: sprite_pokemon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sprite_pokemon (id, back_default, back_female, back_shiny, back_shiny_female, front_default, front_shiny, front_female, front_shiny_female, pokemon_id) FROM stdin;
\.


--
-- Data for Name: stat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stat (id, nome, is_battle_only, game_index, damage_class) FROM stdin;
\.


--
-- Data for Name: tipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo (nome, id, move_damage_class, generation) FROM stdin;
\.


--
-- Data for Name: tipo_efetividade; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_efetividade (id, relacao, tipo_alvo_id, tipo_atancante_id) FROM stdin;
\.


--
-- Name: aprende_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.aprende_id_seq', 1, false);


--
-- Name: battle_style_preference_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.battle_style_preference_id_seq', 1, false);


--
-- Name: berry_flavor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.berry_flavor_id_seq', 1, false);


--
-- Name: caracteristica_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.caracteristica_id_seq', 1, false);


--
-- Name: catalogo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.catalogo_id_seq', 1, false);


--
-- Name: contest_combo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contest_combo_id_seq', 1, false);


--
-- Name: evolucao_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.evolucao_id_seq', 1, false);


--
-- Name: item_atributo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_atributo_id_seq', 1, false);


--
-- Name: item_game_index_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_game_index_id_seq', 1, false);


--
-- Name: modifica_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modifica_id_seq', 1, false);


--
-- Name: move_effect_entry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.move_effect_entry_id_seq', 1, false);


--
-- Name: move_flavor_text_entry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.move_flavor_text_entry_id_seq', 1, false);


--
-- Name: movimento_meta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimento_meta_id_seq', 1, false);


--
-- Name: movimento_past_values_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimento_past_values_id_seq', 1, false);


--
-- Name: pokemon_habilidade_antiga_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_habilidade_antiga_id_seq', 1, false);


--
-- Name: pokemon_habilidade_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_habilidade_id_seq', 1, false);


--
-- Name: pokemon_stat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_stat_id_seq', 1, false);


--
-- Name: pokemon_tipo_antigo_pokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_tipo_antigo_pokemon_id_seq', 1, false);


--
-- Name: pokemon_tipo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_tipo_id_seq', 1, false);


--
-- Name: sprite_pokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sprite_pokemon_id_seq', 1, false);


--
-- Name: tipo_efetividade_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipo_efetividade_id_seq', 1, false);


--
-- Name: item_atributo PK_02b768560aee3e196889e3609aa; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_atributo
    ADD CONSTRAINT "PK_02b768560aee3e196889e3609aa" PRIMARY KEY (id);


--
-- Name: especie PK_07fb45be286aefa181943248b21; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.especie
    ADD CONSTRAINT "PK_07fb45be286aefa181943248b21" PRIMARY KEY (id);


--
-- Name: pokemon PK_0b503db1369f46c43f8da0a6a0a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY (id);


--
-- Name: stat PK_132de903d366f4c06cd586c43c0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stat
    ADD CONSTRAINT "PK_132de903d366f4c06cd586c43c0" PRIMARY KEY (id);


--
-- Name: evolucao PK_1b688715d4ea7752b55657031c3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "PK_1b688715d4ea7752b55657031c3" PRIMARY KEY (id);


--
-- Name: encounter PK_1cf9e15e693ff9f0ef9b9061372; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encounter
    ADD CONSTRAINT "PK_1cf9e15e693ff9f0ef9b9061372" PRIMARY KEY (id);


--
-- Name: especie_flavor_text PK_20c7270c2ad6a17ab0f2ec3fc9d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.especie_flavor_text
    ADD CONSTRAINT "PK_20c7270c2ad6a17ab0f2ec3fc9d" PRIMARY KEY (especie_id, version, language);


--
-- Name: habilidade_effect_entry PK_25556002ee33d2ed52166e35077; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidade_effect_entry
    ADD CONSTRAINT "PK_25556002ee33d2ed52166e35077" PRIMARY KEY (habilidade_id, version_group, language);


--
-- Name: move_battle_style PK_264171c591466a1eb0667795300; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_battle_style
    ADD CONSTRAINT "PK_264171c591466a1eb0667795300" PRIMARY KEY (id);


--
-- Name: area PK_39d5e4de490139d6535d75f42ff; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.area
    ADD CONSTRAINT "PK_39d5e4de490139d6535d75f42ff" PRIMARY KEY (id);


--
-- Name: berry PK_445d3146e6fb098963463b0cf68; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.berry
    ADD CONSTRAINT "PK_445d3146e6fb098963463b0cf68" PRIMARY KEY (id);


--
-- Name: egg_group PK_46b8f842a7d64bded8cf2629a5a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.egg_group
    ADD CONSTRAINT "PK_46b8f842a7d64bded8cf2629a5a" PRIMARY KEY (especie_id, nome);


--
-- Name: atributo PK_484ad8d8d974ef208fe022ebb62; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.atributo
    ADD CONSTRAINT "PK_484ad8d8d974ef208fe022ebb62" PRIMARY KEY (id);


--
-- Name: nature PK_49931224e0ece835c44e793b34d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nature
    ADD CONSTRAINT "PK_49931224e0ece835c44e793b34d" PRIMARY KEY (id);


--
-- Name: pokemon_tipo_antigo PK_5022b6d42e70241e63d85ab4f06; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo_antigo
    ADD CONSTRAINT "PK_5022b6d42e70241e63d85ab4f06" PRIMARY KEY (pokemon_id);


--
-- Name: berry_flavor PK_5160744b3b5d7b30956da245279; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.berry_flavor
    ADD CONSTRAINT "PK_5160744b3b5d7b30956da245279" PRIMARY KEY (id);


--
-- Name: movimento_meta PK_5ca33ad7fc9653d437242e14958; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento_meta
    ADD CONSTRAINT "PK_5ca33ad7fc9653d437242e14958" PRIMARY KEY (id);


--
-- Name: move_effect_entry PK_60299cc69b76e88516a2b380b6f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_effect_entry
    ADD CONSTRAINT "PK_60299cc69b76e88516a2b380b6f" PRIMARY KEY (id);


--
-- Name: move_damage_class PK_68a7ed39f293fd479734e025650; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_damage_class
    ADD CONSTRAINT "PK_68a7ed39f293fd479734e025650" PRIMARY KEY (nome);


--
-- Name: contest_effect PK_6b1ec903edfd000d35227088921; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contest_effect
    ADD CONSTRAINT "PK_6b1ec903edfd000d35227088921" PRIMARY KEY (id);


--
-- Name: habilidade PK_6e005b7e58206bec3dcc66d061b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidade
    ADD CONSTRAINT "PK_6e005b7e58206bec3dcc66d061b" PRIMARY KEY (id);


--
-- Name: pal_park_encounter PK_6edc86b9bd068f1b00988585739; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pal_park_encounter
    ADD CONSTRAINT "PK_6edc86b9bd068f1b00988585739" PRIMARY KEY (id);


--
-- Name: pokemon_tipo PK_6f697a1abcb7cec575ddf6500e0; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo
    ADD CONSTRAINT "PK_6f697a1abcb7cec575ddf6500e0" PRIMARY KEY (id);


--
-- Name: move_flavor_text_entry PK_752fba465dfb451fa9a8888b672; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_flavor_text_entry
    ADD CONSTRAINT "PK_752fba465dfb451fa9a8888b672" PRIMARY KEY (id);


--
-- Name: item_effect_entry PK_75ec3e4109366a19223bf04a310; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_effect_entry
    ADD CONSTRAINT "PK_75ec3e4109366a19223bf04a310" PRIMARY KEY (id);


--
-- Name: aprende PK_81e502619b2bde6f20d43d69ea3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprende
    ADD CONSTRAINT "PK_81e502619b2bde6f20d43d69ea3" PRIMARY KEY (id);


--
-- Name: movimento PK_863688ee9a8276bd365c3ce84a6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento
    ADD CONSTRAINT "PK_863688ee9a8276bd365c3ce84a6" PRIMARY KEY (id);


--
-- Name: move_category PK_889325a0e3be23a6ecb105affe7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_category
    ADD CONSTRAINT "PK_889325a0e3be23a6ecb105affe7" PRIMARY KEY (nome);


--
-- Name: move_target PK_91109073a148bb3950026ec1e60; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_target
    ADD CONSTRAINT "PK_91109073a148bb3950026ec1e60" PRIMARY KEY (nome);


--
-- Name: flavor PK_934fe79b3d8131395c29a040ee5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flavor
    ADD CONSTRAINT "PK_934fe79b3d8131395c29a040ee5" PRIMARY KEY (id);


--
-- Name: habilidade_flavor_text_entry PK_93e411187d6f5d301c6b660204f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidade_flavor_text_entry
    ADD CONSTRAINT "PK_93e411187d6f5d301c6b660204f" PRIMARY KEY (habilidade_id, version_group, language);


--
-- Name: modifica PK_9a9709202f814fa6b6a892196c8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifica
    ADD CONSTRAINT "PK_9a9709202f814fa6b6a892196c8" PRIMARY KEY (id);


--
-- Name: item_segurado PK_a1cd2d07371ce4af5503098bd6e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_segurado
    ADD CONSTRAINT "PK_a1cd2d07371ce4af5503098bd6e" PRIMARY KEY (id);


--
-- Name: tipo PK_a67247249373b958a16801211c6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo
    ADD CONSTRAINT "PK_a67247249373b958a16801211c6" PRIMARY KEY (id);


--
-- Name: machine PK_acc588900ffa841d96eb5fd566c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.machine
    ADD CONSTRAINT "PK_acc588900ffa841d96eb5fd566c" PRIMARY KEY (id);


--
-- Name: item_game_index PK_b0035e962ff159432af1352a288; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_game_index
    ADD CONSTRAINT "PK_b0035e962ff159432af1352a288" PRIMARY KEY (id);


--
-- Name: pokeathlon_stat_change PK_b1a2426c92f5b5a7a7a006e8f82; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokeathlon_stat_change
    ADD CONSTRAINT "PK_b1a2426c92f5b5a7a7a006e8f82" PRIMARY KEY (nature_id, stat);


--
-- Name: catalogo PK_b545f16d7a23efa494bb2dd5994; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalogo
    ADD CONSTRAINT "PK_b545f16d7a23efa494bb2dd5994" PRIMARY KEY (id);


--
-- Name: genero PK_c2a6cd7c2f6697aaa1c07ff391e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genero
    ADD CONSTRAINT "PK_c2a6cd7c2f6697aaa1c07ff391e" PRIMARY KEY (pokemon_especie, lingua);


--
-- Name: sprite_pokemon PK_c5f674646171cd478877c8479ce; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sprite_pokemon
    ADD CONSTRAINT "PK_c5f674646171cd478877c8479ce" PRIMARY KEY (id);


--
-- Name: tipo_efetividade PK_cf49b8c04c0ff9d970c524e9d1f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_efetividade
    ADD CONSTRAINT "PK_cf49b8c04c0ff9d970c524e9d1f" PRIMARY KEY (id);


--
-- Name: item PK_d3c0c71f23e7adcf952a1d13423; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY (id);


--
-- Name: item_flavor_text_entry PK_d43647dd66c579bc079780c0bfc; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_flavor_text_entry
    ADD CONSTRAINT "PK_d43647dd66c579bc079780c0bfc" PRIMARY KEY (id);


--
-- Name: pokemon_habilidade_antiga PK_d56a561dfc10fd929e14ea3caee; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade_antiga
    ADD CONSTRAINT "PK_d56a561dfc10fd929e14ea3caee" PRIMARY KEY (id);


--
-- Name: pokemon_stat PK_d77d0bf69e6a2dd88d058a4882c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_stat
    ADD CONSTRAINT "PK_d77d0bf69e6a2dd88d058a4882c" PRIMARY KEY (id);


--
-- Name: encounter_condition PK_dcb59ffad25cf639e0821b7b44f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encounter_condition
    ADD CONSTRAINT "PK_dcb59ffad25cf639e0821b7b44f" PRIMARY KEY (encounter_id, condition);


--
-- Name: caracteristica PK_dd5a97e77e6d92a70283926eb95; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.caracteristica
    ADD CONSTRAINT "PK_dd5a97e77e6d92a70283926eb95" PRIMARY KEY (id);


--
-- Name: pokemon_habilidade PK_e0f28cb952f601a77724d4ab07a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade
    ADD CONSTRAINT "PK_e0f28cb952f601a77724d4ab07a" PRIMARY KEY (id);


--
-- Name: pokedex PK_e8492d982c859ae93cb6433c61f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokedex
    ADD CONSTRAINT "PK_e8492d982c859ae93cb6433c61f" PRIMARY KEY (id);


--
-- Name: growth_rate PK_e9d83377496d3852d68400370a1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.growth_rate
    ADD CONSTRAINT "PK_e9d83377496d3852d68400370a1" PRIMARY KEY (id);


--
-- Name: battle_style_preference PK_ed96a5de68e25c38075bd10f84e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battle_style_preference
    ADD CONSTRAINT "PK_ed96a5de68e25c38075bd10f84e" PRIMARY KEY (id);


--
-- Name: contest_combo PK_f6e8451f6cc30506391ec5693d1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contest_combo
    ADD CONSTRAINT "PK_f6e8451f6cc30506391ec5693d1" PRIMARY KEY (id);


--
-- Name: movimento_past_values PK_fa1b9b4e69d6feaea0220fa5213; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento_past_values
    ADD CONSTRAINT "PK_fa1b9b4e69d6feaea0220fa5213" PRIMARY KEY (id);


--
-- Name: area_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX area_pkey ON public.area USING btree (id);


--
-- Name: atributo_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX atributo_pkey ON public.atributo USING btree (id);


--
-- Name: berry_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX berry_pkey ON public.berry USING btree (id);


--
-- Name: contest_effect_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX contest_effect_pkey ON public.contest_effect USING btree (id);


--
-- Name: egg_group_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX egg_group_pkey ON public.egg_group USING btree (especie_id, nome);


--
-- Name: encounter_condition_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX encounter_condition_pkey ON public.encounter_condition USING btree (condition, encounter_id);


--
-- Name: encounter_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX encounter_pkey ON public.encounter USING btree (id);


--
-- Name: especie_flavor_text_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX especie_flavor_text_pkey ON public.especie_flavor_text USING btree (especie_id, language, version);


--
-- Name: especie_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX especie_pkey ON public.especie USING btree (id);


--
-- Name: flavor_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX flavor_pkey ON public.flavor USING btree (id);


--
-- Name: genero_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX genero_pkey ON public.genero USING btree (lingua, pokemon_especie);


--
-- Name: growth_rate_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX growth_rate_pkey ON public.growth_rate USING btree (id);


--
-- Name: habilidade_effect_entry_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX habilidade_effect_entry_pkey ON public.habilidade_effect_entry USING btree (habilidade_id, language, version_group);


--
-- Name: habilidade_flavor_text_entry_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX habilidade_flavor_text_entry_pkey ON public.habilidade_flavor_text_entry USING btree (habilidade_id, language, version_group);


--
-- Name: habilidade_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX habilidade_pkey ON public.habilidade USING btree (id);


--
-- Name: item_flavor_text_entry_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX item_flavor_text_entry_pkey ON public.item_flavor_text_entry USING btree (id);


--
-- Name: item_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX item_pkey ON public.item USING btree (id);


--
-- Name: item_segurado_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX item_segurado_pkey ON public.item_segurado USING btree (id);


--
-- Name: machine_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX machine_pkey ON public.machine USING btree (id);


--
-- Name: move_battle_style_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX move_battle_style_pkey ON public.move_battle_style USING btree (id);


--
-- Name: move_category_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX move_category_pkey ON public.move_category USING btree (nome);


--
-- Name: move_damage_class_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX move_damage_class_pkey ON public.move_damage_class USING btree (nome);


--
-- Name: move_target_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX move_target_pkey ON public.move_target USING btree (nome);


--
-- Name: movimento_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX movimento_pkey ON public.movimento USING btree (id);


--
-- Name: nature_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX nature_pkey ON public.nature USING btree (id);


--
-- Name: pokeathlon_stat_change_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pokeathlon_stat_change_pkey ON public.pokeathlon_stat_change USING btree (nature_id, stat);


--
-- Name: pokedex_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pokedex_pkey ON public.pokedex USING btree (id);


--
-- Name: pokemon_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX pokemon_pkey ON public.pokemon USING btree (id);


--
-- Name: stat_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX stat_pkey ON public.stat USING btree (id);


--
-- Name: tipo_pkey; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX tipo_pkey ON public.tipo USING btree (id);


--
-- Name: pal_park_encounter FK_01b7ca13356137b4ac426011ccd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pal_park_encounter
    ADD CONSTRAINT "FK_01b7ca13356137b4ac426011ccd" FOREIGN KEY (especie_id) REFERENCES public.especie(id);


--
-- Name: evolucao FK_0348aaf95eab27fd5dcce84ef54; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_0348aaf95eab27fd5dcce84ef54" FOREIGN KEY (party_type) REFERENCES public.tipo(id);


--
-- Name: movimento_past_values FK_04edae0670dc876d68884f081f7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento_past_values
    ADD CONSTRAINT "FK_04edae0670dc876d68884f081f7" FOREIGN KEY (movimento_id) REFERENCES public.movimento(id);


--
-- Name: genero FK_073d80a5a34de0d78185def3f4c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genero
    ADD CONSTRAINT "FK_073d80a5a34de0d78185def3f4c" FOREIGN KEY (pokemon_especie) REFERENCES public.especie(id);


--
-- Name: berry_flavor FK_1294b7ed30d923dbd331378af3f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.berry_flavor
    ADD CONSTRAINT "FK_1294b7ed30d923dbd331378af3f" FOREIGN KEY (berry_id) REFERENCES public.berry(id);


--
-- Name: movimento FK_177c8c441776710d37650b4ead3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento
    ADD CONSTRAINT "FK_177c8c441776710d37650b4ead3" FOREIGN KEY (damage_class) REFERENCES public.move_damage_class(nome);


--
-- Name: item_effect_entry FK_17d12499fe5bc029b5538d89ede; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_effect_entry
    ADD CONSTRAINT "FK_17d12499fe5bc029b5538d89ede" FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: pokemon_habilidade FK_1a9ec145987f4ddfd2994b1b0eb; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade
    ADD CONSTRAINT "FK_1a9ec145987f4ddfd2994b1b0eb" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: move_flavor_text_entry FK_1aec6c9f68dcea45b664cb254ea; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_flavor_text_entry
    ADD CONSTRAINT "FK_1aec6c9f68dcea45b664cb254ea" FOREIGN KEY (move_id) REFERENCES public.movimento(id);


--
-- Name: item_segurado FK_1b6b06698823dc421b40316648c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_segurado
    ADD CONSTRAINT "FK_1b6b06698823dc421b40316648c" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: catalogo FK_1bea22dd8892de7d96b27b2b978; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalogo
    ADD CONSTRAINT "FK_1bea22dd8892de7d96b27b2b978" FOREIGN KEY (especie_id) REFERENCES public.especie(id);


--
-- Name: pokemon_stat FK_1f0e620be6d5d71ceee4ee833c5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_stat
    ADD CONSTRAINT "FK_1f0e620be6d5d71ceee4ee833c5" FOREIGN KEY (stat_id) REFERENCES public.stat(id);


--
-- Name: habilidade_flavor_text_entry FK_1f4caf58fecaf272d0ffc9b3428; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidade_flavor_text_entry
    ADD CONSTRAINT "FK_1f4caf58fecaf272d0ffc9b3428" FOREIGN KEY (habilidade_id) REFERENCES public.habilidade(id);


--
-- Name: machine FK_242b098079ed0e87ebb816ccea5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.machine
    ADD CONSTRAINT "FK_242b098079ed0e87ebb816ccea5" FOREIGN KEY (movimento_id) REFERENCES public.movimento(id);


--
-- Name: catalogo FK_256ef4afb98791f36d2143cd112; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catalogo
    ADD CONSTRAINT "FK_256ef4afb98791f36d2143cd112" FOREIGN KEY (pokedex_id) REFERENCES public.pokedex(id);


--
-- Name: movimento FK_34924ba6ec3c97b30ed48067e89; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento
    ADD CONSTRAINT "FK_34924ba6ec3c97b30ed48067e89" FOREIGN KEY (tipo_id) REFERENCES public.tipo(id);


--
-- Name: movimento FK_353429870128431202ae8d6ca5c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento
    ADD CONSTRAINT "FK_353429870128431202ae8d6ca5c" FOREIGN KEY (contest_effect) REFERENCES public.contest_effect(id);


--
-- Name: evolucao FK_35dd561ae3e5b24fa20440b8783; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_35dd561ae3e5b24fa20440b8783" FOREIGN KEY (known_move_type) REFERENCES public.tipo(id);


--
-- Name: stat FK_36fa5f4192b9a1a64efcd50abe2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stat
    ADD CONSTRAINT "FK_36fa5f4192b9a1a64efcd50abe2" FOREIGN KEY (damage_class) REFERENCES public.move_damage_class(nome);


--
-- Name: encounter FK_3fee8095d86ca24982fd298941e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encounter
    ADD CONSTRAINT "FK_3fee8095d86ca24982fd298941e" FOREIGN KEY (area_id) REFERENCES public.area(id);


--
-- Name: item_game_index FK_428c6d26d1e940277b2d9e9fd4e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_game_index
    ADD CONSTRAINT "FK_428c6d26d1e940277b2d9e9fd4e" FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: contest_combo FK_44c872f9baa7c553aa32e2a97d3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contest_combo
    ADD CONSTRAINT "FK_44c872f9baa7c553aa32e2a97d3" FOREIGN KEY (first_move_id) REFERENCES public.movimento(id);


--
-- Name: sprite_pokemon FK_4cf2d98362d8b295dce66931450; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sprite_pokemon
    ADD CONSTRAINT "FK_4cf2d98362d8b295dce66931450" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: item_segurado FK_4d452ca9727b5ac915572e9c991; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_segurado
    ADD CONSTRAINT "FK_4d452ca9727b5ac915572e9c991" FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: pokemon FK_4fecc0db668027cb96e4083eab9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT "FK_4fecc0db668027cb96e4083eab9" FOREIGN KEY (especie_id) REFERENCES public.especie(id);


--
-- Name: pokemon_tipo_antigo FK_5022b6d42e70241e63d85ab4f06; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo_antigo
    ADD CONSTRAINT "FK_5022b6d42e70241e63d85ab4f06" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: egg_group FK_55ebec4b9c8c4713c0a245163b9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.egg_group
    ADD CONSTRAINT "FK_55ebec4b9c8c4713c0a245163b9" FOREIGN KEY (especie_id) REFERENCES public.especie(id);


--
-- Name: berry FK_5edeb0d90f0a7be2636ca060e77; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.berry
    ADD CONSTRAINT "FK_5edeb0d90f0a7be2636ca060e77" FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: tipo_efetividade FK_60f829aef6e5861f34e781ec1ae; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_efetividade
    ADD CONSTRAINT "FK_60f829aef6e5861f34e781ec1ae" FOREIGN KEY (tipo_alvo_id) REFERENCES public.tipo(id);


--
-- Name: evolucao FK_63a276ca4c209b040cb2e7fb0b0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_63a276ca4c209b040cb2e7fb0b0" FOREIGN KEY (party_species) REFERENCES public.especie(id);


--
-- Name: aprende FK_66c72aece203f47c27de711ae7d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprende
    ADD CONSTRAINT "FK_66c72aece203f47c27de711ae7d" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: aprende FK_6ec97ce85709c2d987c79454cb8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprende
    ADD CONSTRAINT "FK_6ec97ce85709c2d987c79454cb8" FOREIGN KEY (move_id) REFERENCES public.movimento(id);


--
-- Name: nature FK_70f50cb7d63824738f98864339f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nature
    ADD CONSTRAINT "FK_70f50cb7d63824738f98864339f" FOREIGN KEY (likes_flavor_id) REFERENCES public.flavor(id);


--
-- Name: pokeathlon_stat_change FK_716d6da8397e61da6ffc9c66a02; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokeathlon_stat_change
    ADD CONSTRAINT "FK_716d6da8397e61da6ffc9c66a02" FOREIGN KEY (nature_id) REFERENCES public.nature(id);


--
-- Name: evolucao FK_72eb8b30f6c23897fed0cb55255; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_72eb8b30f6c23897fed0cb55255" FOREIGN KEY (known_move_id) REFERENCES public.movimento(id);


--
-- Name: battle_style_preference FK_7acfb5cf324315300f7dfaf73b8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battle_style_preference
    ADD CONSTRAINT "FK_7acfb5cf324315300f7dfaf73b8" FOREIGN KEY (battle_style_id) REFERENCES public.move_battle_style(id);


--
-- Name: battle_style_preference FK_7ec67fde07c12df782afe95f289; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.battle_style_preference
    ADD CONSTRAINT "FK_7ec67fde07c12df782afe95f289" FOREIGN KEY (nature_id) REFERENCES public.nature(id);


--
-- Name: evolucao FK_86d2a29aaca5453264348b2f3ab; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_86d2a29aaca5453264348b2f3ab" FOREIGN KEY (trade_species) REFERENCES public.especie(id);


--
-- Name: caracteristica FK_8782756e5ea36c3731d11be1ccd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.caracteristica
    ADD CONSTRAINT "FK_8782756e5ea36c3731d11be1ccd" FOREIGN KEY (stat_id) REFERENCES public.stat(id);


--
-- Name: evolucao FK_893142e0c988b7a37f780f3a4a4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_893142e0c988b7a37f780f3a4a4" FOREIGN KEY (especie_evoluida) REFERENCES public.especie(id);


--
-- Name: evolucao FK_89732c2debe61a5b2c61571f967; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_89732c2debe61a5b2c61571f967" FOREIGN KEY (area_id) REFERENCES public.area(id);


--
-- Name: evolucao FK_8d3b4ad5eac7af232f959fde6f3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_8d3b4ad5eac7af232f959fde6f3" FOREIGN KEY (especie_anterior) REFERENCES public.especie(id);


--
-- Name: encounter_condition FK_8e78a98250305e22c384d4912d3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encounter_condition
    ADD CONSTRAINT "FK_8e78a98250305e22c384d4912d3" FOREIGN KEY (encounter_id) REFERENCES public.encounter(id);


--
-- Name: especie_flavor_text FK_8e8478e180ad41ffbbeb58c45a0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.especie_flavor_text
    ADD CONSTRAINT "FK_8e8478e180ad41ffbbeb58c45a0" FOREIGN KEY (especie_id) REFERENCES public.especie(id);


--
-- Name: tipo_efetividade FK_8f2ef1b515a28b9fa73a86276aa; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_efetividade
    ADD CONSTRAINT "FK_8f2ef1b515a28b9fa73a86276aa" FOREIGN KEY (tipo_atancante_id) REFERENCES public.tipo(id);


--
-- Name: contest_combo FK_910ac830bccae28931dd93fe7ce; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contest_combo
    ADD CONSTRAINT "FK_910ac830bccae28931dd93fe7ce" FOREIGN KEY (second_move_id) REFERENCES public.movimento(id);


--
-- Name: pokemon_habilidade FK_913e7dd4a17c77813abaeb23275; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade
    ADD CONSTRAINT "FK_913e7dd4a17c77813abaeb23275" FOREIGN KEY (habilidade_id) REFERENCES public.habilidade(id);


--
-- Name: nature FK_969abbee9a53cc6e30b41890ac3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nature
    ADD CONSTRAINT "FK_969abbee9a53cc6e30b41890ac3" FOREIGN KEY (stat_diminuido_id) REFERENCES public.stat(id);


--
-- Name: pokemon_habilidade_antiga FK_978255ce2811d7022aa25efa328; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade_antiga
    ADD CONSTRAINT "FK_978255ce2811d7022aa25efa328" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: machine FK_988e51362001431a06fc0e7ed96; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.machine
    ADD CONSTRAINT "FK_988e51362001431a06fc0e7ed96" FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: pokemon_tipo_antigo FK_9f42330f08746fd8a54838ad803; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo_antigo
    ADD CONSTRAINT "FK_9f42330f08746fd8a54838ad803" FOREIGN KEY (tipo_id) REFERENCES public.tipo(id);


--
-- Name: modifica FK_a1985a5dff8b2f9d705299decf0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifica
    ADD CONSTRAINT "FK_a1985a5dff8b2f9d705299decf0" FOREIGN KEY (stat_id) REFERENCES public.stat(id);


--
-- Name: movimento FK_a55284c5e08cc3c8589138f285e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento
    ADD CONSTRAINT "FK_a55284c5e08cc3c8589138f285e" FOREIGN KEY (target) REFERENCES public.move_target(nome);


--
-- Name: movimento_meta FK_a66031d71312c6467d53d1f5346; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimento_meta
    ADD CONSTRAINT "FK_a66031d71312c6467d53d1f5346" FOREIGN KEY (movimento_id) REFERENCES public.movimento(id);


--
-- Name: modifica FK_a6dcd77b2da97e999b9a421b218; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modifica
    ADD CONSTRAINT "FK_a6dcd77b2da97e999b9a421b218" FOREIGN KEY (movimento_id) REFERENCES public.movimento(id);


--
-- Name: especie FK_ab0366743e5829b477c4a09c78b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.especie
    ADD CONSTRAINT "FK_ab0366743e5829b477c4a09c78b" FOREIGN KEY (growth_rate_id) REFERENCES public.growth_rate(id);


--
-- Name: item_flavor_text_entry FK_ad09e6d98aa2de5c53ada64284e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_flavor_text_entry
    ADD CONSTRAINT "FK_ad09e6d98aa2de5c53ada64284e" FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: evolucao FK_b2e805e73843646ae0ed008d07f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evolucao
    ADD CONSTRAINT "FK_b2e805e73843646ae0ed008d07f" FOREIGN KEY (held_item) REFERENCES public.item(id);


--
-- Name: item_atributo FK_b795659ae28aeb2f0b39cd68345; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_atributo
    ADD CONSTRAINT "FK_b795659ae28aeb2f0b39cd68345" FOREIGN KEY (item_id) REFERENCES public.item(id);


--
-- Name: pokemon_tipo FK_bd7744a1d9ad6f2cc60ffea3669; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo
    ADD CONSTRAINT "FK_bd7744a1d9ad6f2cc60ffea3669" FOREIGN KEY (tipo_id) REFERENCES public.tipo(id);


--
-- Name: pokemon_habilidade_antiga FK_be3ccc34ca6976e03309e2a0d0f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_habilidade_antiga
    ADD CONSTRAINT "FK_be3ccc34ca6976e03309e2a0d0f" FOREIGN KEY (habilidade_id) REFERENCES public.habilidade(id);


--
-- Name: pokemon_stat FK_e037342c3389d804fa9a4d6cf11; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_stat
    ADD CONSTRAINT "FK_e037342c3389d804fa9a4d6cf11" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: pokemon_tipo FK_e0ef4f10daada0d45aed3c317ad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon_tipo
    ADD CONSTRAINT "FK_e0ef4f10daada0d45aed3c317ad" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: encounter FK_e22c2d149c6df075766b5fd2bbe; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.encounter
    ADD CONSTRAINT "FK_e22c2d149c6df075766b5fd2bbe" FOREIGN KEY (pokemon_id) REFERENCES public.pokemon(id);


--
-- Name: move_effect_entry FK_eae6990d1a29200a6c3dded8d82; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.move_effect_entry
    ADD CONSTRAINT "FK_eae6990d1a29200a6c3dded8d82" FOREIGN KEY (move_id) REFERENCES public.movimento(id);


--
-- Name: nature FK_f7aae77a0ce48ab86d9f4df8f17; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nature
    ADD CONSTRAINT "FK_f7aae77a0ce48ab86d9f4df8f17" FOREIGN KEY (stat_aumentado_id) REFERENCES public.stat(id);


--
-- Name: berry_flavor FK_f7d953b2f42062e7acebf413b06; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.berry_flavor
    ADD CONSTRAINT "FK_f7d953b2f42062e7acebf413b06" FOREIGN KEY (flavor_id) REFERENCES public.flavor(id);


--
-- Name: item_atributo FK_f8ecf83c0d9aeaf1e53d93c01c5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_atributo
    ADD CONSTRAINT "FK_f8ecf83c0d9aeaf1e53d93c01c5" FOREIGN KEY (atributo_id) REFERENCES public.atributo(id);


--
-- Name: habilidade_effect_entry FK_fac7d5671adba60cd5ff0074e97; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidade_effect_entry
    ADD CONSTRAINT "FK_fac7d5671adba60cd5ff0074e97" FOREIGN KEY (habilidade_id) REFERENCES public.habilidade(id);


--
-- PostgreSQL database dump complete
--

