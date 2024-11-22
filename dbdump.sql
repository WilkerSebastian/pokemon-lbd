CREATE TABLE encounter_condition (
   encounter_id INT,
   condition VARCHAR(50),
   PRIMARY KEY (encounter_id, condition)
);

CREATE TABLE encounter (
   id INT PRIMARY KEY,
   area_id INT,
   pokemon_id INT,
   min_level INT,
   max_level INT,
   chance INT,
   metodo VARCHAR(50),
   version VARCHAR(50),
   max_chance INT
);

CREATE TABLE area (
   id INT,
   nome VARCHAR(50),
   location VARCHAR(50),
   region VARCHAR(50),
   PRIMARY KEY (id)
);

CREATE TABLE catalogo (
   pokedex_id INT,
   especie_id INT,
   entry_number INT
);

CREATE TABLE pokedex (
   id INT,
   nome VARCHAR(50),
   is_main_series BOOLEAN,
   region VARCHAR(50),
   descricao TEXT,
   PRIMARY KEY (id)
);

CREATE TABLE especie (
   nome VARCHAR(50),
   id INT,
   base_happiness INT,
   capture_rate INT,
   gender_rate INT,
   ordem INT,
   hatch_counter INT,
   cor VARCHAR(50),
   habitat VARCHAR(50),
   generation VARCHAR(50),
   formato VARCHAR(50),
   has_gender_differences BOOLEAN,
   is_baby BOOLEAN,
   is_mythical BOOLEAN,
   is_legendary BOOLEAN,
   forms_switchable BOOLEAN,
   growth_rate_id INT,
   especie_flavor_text_id INT,
   PRIMARY KEY (id)
);

CREATE TABLE genero (
   pokemon_especie INT,
   lingua VARCHAR(50),
   genero VARCHAR(50),
   PRIMARY KEY (pokemon_especie, lingua)
);

CREATE TABLE pal_park_encounter (
   especie_id INT,
   nome VARCHAR(50),
   base_score INT,
   rate INT
);

CREATE TABLE egg_group (
   especie_id INT,
   nome VARCHAR(50),
   PRIMARY KEY (especie_id, nome)
);

CREATE TABLE growth_rate (
   id INT PRIMARY KEY,
   nome VARCHAR(50),
   levels INT[],
   formula VARCHAR(50)
);

CREATE TABLE especie_flavor_text (
   especie_id INT,
   version VARCHAR(50),
   language VARCHAR(50),
   flavor_text TEXT,
   PRIMARY KEY (especie_id, version, language)
);

CREATE TABLE evolucao (
   especie_anterior INT,
   especie_evoluida INT,
   held_item INT,
   known_move_id INT,
   area_id INT,
   location INT,
   known_move_type INT,
   party_species INT,
   party_type INT,
   trade_species INT,
   trigger VARCHAR(50),
   genero VARCHAR(50),
   min_affection INT,
   min_beauty INT,
   min_happiness INT,
   min_level INT,
   needs_overworld_rain BOOLEAN,
   relative_physical_stats INT,
   time_of_day VARCHAR(50),
   turn_upside_down BOOLEAN
);

CREATE TABLE item_segurado (
   id INT PRIMARY KEY,
   pokemon_id INT,
   item_id INT,
   version VARCHAR(50),
   rarity INT
);

CREATE TABLE pokemon (
   nome VARCHAR(50),
   id INT,
   especie_id INT,
   base_experience INT,
   is_default BOOLEAN,
   peso INT,
   altura INT,
   ordem INT,
   latest_cry TEXT,
   legacy_cry TEXT,
   PRIMARY KEY (id)
);

CREATE TABLE pokemon_habilidade (
   pokemon_id INT,
   habilidade_id INT,
   version_group VARCHAR(50),
   slot INT,
   is_hidden BOOLEAN
);

CREATE TABLE pokemon_habilidade_antiga (
   pokemon_id INT,
   habilidade_id INT,
   generation VARCHAR(50),
   is_hidden BOOLEAN,
   slot INT
);

CREATE TABLE habilidade (
   id INT,
   nome VARCHAR(50),
   generation VARCHAR(50),
   is_main_series BOOLEAN,
   PRIMARY KEY (id)
);


CREATE TABLE habilidade_flavor_text_entry (
   habilidade_id INT,
   version_group VARCHAR(50),
   language VARCHAR(50),
   flavor_text TEXT,
   PRIMARY KEY (habilidade_id, version_group, language)
);

CREATE TABLE habilidade_effect_entry (
   habilidade_id INT,
   version_group VARCHAR(50),
   language VARCHAR(50),
   effect TEXT,
   short_effect TEXT,
   PRIMARY KEY (language, habilidade_id, version_group)
);

CREATE TABLE sprite_pokemon (
   pokemon_id INT,
   back_default TEXT,
   back_female TEXT,
   back_shiny TEXT,
   back_shiny_female TEXT,
   front_default TEXT,
   front_shiny TEXT,
   front_female TEXT,
   front_shiny_female TEXT
);

CREATE TABLE pokemon_tipo (
   pokemon_id INT,
   tipo_id INT
);

CREATE TABLE pokemon_tipo_antigo (
   pokemon_id INT,
   tipo_id INT,
   generation VARCHAR(50)
);

CREATE TABLE aprende (
   pokemon_id INT,
   move_id INT,
   level_learned_at INT,
   metodo VARCHAR(50),
   version_group VARCHAR(50)
);

CREATE TABLE tipo (
   nome VARCHAR(50),
   id INT,
   move_damage_class VARCHAR(50),
   generation VARCHAR(50),
   PRIMARY KEY (id)
);

CREATE TABLE movimento (
   id INT,
   nome VARCHAR(50),
   tipo_id INT,
   target VARCHAR(50),
   damage_class VARCHAR(50),
   accuracy INT,
   priority INT,
   pp INT,
   power INT,
   effect_chance INT,
   contest_type VARCHAR(50),
   contest_effect INT,
   generation VARCHAR(50),
   PRIMARY KEY (id)
);

CREATE TABLE tipo_efetividade (
   tipo_atancante_id INT,
   tipo_alvo_id INT,
   relacao VARCHAR(50)
);

CREATE TABLE contest_effect (
   id INT PRIMARY KEY,
   appeal INT,
   jam INT,
   effect TEXT,
   flavor_text_entry TEXT
);

CREATE TABLE movimento_meta (
   movimento_id INT,
   ailment VARCHAR(50),
   crit_rate INT,
   drain INT,
   flinch_chance INT,
   healing INT,
   max_hits INT,
   min_hits INT,
   max_turns INT,
   stat_chance INT,
   category VARCHAR(50)
);

CREATE TABLE move_category (
   nome VARCHAR(50) PRIMARY KEY,
   descricao TEXT
);

CREATE TABLE move_target (
   nome VARCHAR(50) PRIMARY KEY,
   descricao TEXT
);

CREATE TABLE move_damage_class (
   nome VARCHAR(50) PRIMARY KEY,
   descricao VARCHAR(50)
);

CREATE TABLE move_effect_entry (
   move_id INT,
   effect TEXT,
   short_effect TEXT
);

CREATE TABLE move_flavor_text_entry (
   move_id INT,
   flavor_text TEXT,
   language VARCHAR(50),
   version_group VARCHAR(50)
);

CREATE TABLE contest_combo (
   first_move_id INT,
   second_move_id INT,
   contest_type VARCHAR(50)
);

CREATE TABLE movimento_past_values (
   movimento_id INT,
   accuracy INT,
   power INT,
   pp INT,
   effect_chance INT,
   tipo_id INT,
   version_group INT
);

CREATE TABLE pokemon_stat (
   pokemon_id INT,
   stat_id INT,
   base_sat INT,
   effort INT
);

CREATE TABLE modifica (
   movimento_id INT,
   stat_id INT,
   change INT
);

CREATE TABLE stat (
   id INT,
   nome VARCHAR(50),
   damage_class VARCHAR(50),
   is_battle_only BOOLEAN,
   game_index INT,
   PRIMARY KEY (id)
);

CREATE TABLE caracteristica (
   stat_id INT,
   descricao TEXT,
   gene_modulo INT,
   possible_values INT[]
);

CREATE TABLE pokeathlon_stat_change (
   nature_id INT,
   stat VARCHAR(50),
   max_change INT,
   PRIMARY KEY (stat, nature_id)
);

CREATE TABLE nature (
   id INT,
   nome VARCHAR(50),
   stat_diminuido_id INT,
   stat_aumentado_id INT,
   likes_flavor_id INT,
   PRIMARY KEY (id)
);

CREATE TABLE battle_style_preference (
   nature_id INT,
   battle_style_id INT,
   high_hp_preference INT,
   low_hp_preference INT
);

CREATE TABLE move_battle_style (
   id INT,
   nome VARCHAR(50),
   PRIMARY KEY (id)
);

CREATE TABLE berry (
   id INT,
   nome VARCHAR(50),
   natural_gift_type VARCHAR(50),
   natural_gift_power INT,
   max_harvest INT,
   size INT,
   smoothness INT,
   soil_dryness INT,
   growth_time INT,
   firmness VARCHAR(50),
   item_id INT,
   PRIMARY KEY (id)
);

CREATE TABLE berry_flavor (
   berry_id INT,
   flavor_id INT,
   potency INT
);

CREATE TABLE flavor (
   id INT,
   nome VARCHAR(50),
   contest_type VARCHAR(50),
   PRIMARY KEY (id)
);

CREATE TABLE item (
   id INT,
   nome VARCHAR(50),
   custo INT,
   fling_power INT,
   fling_effect VARCHAR(50),
   category VARCHAR(50),
   pocket VARCHAR(50),
   sprite TEXT,
   baby_trigger_especie INT,
   PRIMARY KEY (id)
);

CREATE TABLE item_atributo (
   item_id INT,
   atributo_id INT
);

CREATE TABLE atributo (
   id INT,
   nome VARCHAR(50),
   descricao TEXT,
   PRIMARY KEY (id)
);

CREATE TABLE item_flavor_text_entry (
   id INT PRIMARY KEY,
   item_id INT,
   version_group VARCHAR(50),
   flavor_text TEXT,
   language VARCHAR(50)
);

CREATE TABLE item_effect_entry (
   item_id INT,
   effect TEXT,
   short_effect TEXT
);

CREATE TABLE item_game_index (
   item_id INT,
   generation INT,
   game_index INT
);

CREATE TABLE machine (
   id INT PRIMARY KEY,
   item_id INT,
   movimento_id INT,
   version_group VARCHAR(50)
);
-------------------------------
ALTER TABLE encounter_condition
ADD FOREIGN KEY(encounter_id) REFERENCES encounter(id);

ALTER TABLE encounter
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
ADD FOREIGN KEY (area_id) REFERENCES area(id);

ALTER TABLE catalogo
ADD FOREIGN KEY (pokedex_id) REFERENCES pokedex(id),
ADD FOREIGN KEY (especie_id) REFERENCES especie(id);

ALTER TABLE genero
ADD FOREIGN KEY (pokemon_especie) REFERENCES especie(id);

ALTER TABLE pal_park_encounter
ADD FOREIGN KEY (especie_id) REFERENCES especie(id);

ALTER TABLE egg_group
ADD FOREIGN KEY (especie_id) REFERENCES especie(id);

ALTER TABLE especie_flavor_text
ADD FOREIGN KEY (especie_id) REFERENCES especie(id);

ALTER TABLE especie
ADD FOREIGN KEY (growth_rate_id) REFERENCES growth_rate(id);

ALTER TABLE evolucao
ADD FOREIGN KEY (especie_anterior) REFERENCES especie(id),
ADD FOREIGN KEY (especie_evoluida) REFERENCES especie(id),
ADD FOREIGN KEY (held_item) REFERENCES item(id),
ADD FOREIGN KEY (known_move_id) REFERENCES movimento(id),
ADD FOREIGN KEY (area_id) REFERENCES area(id),
ADD FOREIGN KEY (known_move_type) REFERENCES tipo(id),
ADD FOREIGN KEY (party_species) REFERENCES especie(id),
ADD FOREIGN KEY (party_type)REFERENCES tipo(id),
ADD FOREIGN KEY (trade_species) REFERENCES especie(id);

ALTER TABLE pokemon_tipo
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
ADD FOREIGN KEY (tipo_id) REFERENCES tipo(id);

ALTER TABLE pokemon
ADD FOREIGN KEY (especie_id) REFERENCES especie(id);

ALTER TABLE pokemon_tipo_antigo
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
ADD FOREIGN KEY (tipo_id) REFERENCES tipo(id);

ALTER TABLE sprite_pokemon
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id);

ALTER TABLE aprende
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
ADD FOREIGN KEY (move_id) REFERENCES movimento(id);

ALTER TABLE tipo_efetividade
ADD FOREIGN KEY (tipo_atancante_id) REFERENCES tipo(id),
ADD FOREIGN KEY (tipo_alvo_id) REFERENCES tipo(id);

ALTER TABLE movimento
ADD FOREIGN KEY (tipo_id) REFERENCES tipo(id),
ADD FOREIGN KEY (target) REFERENCES move_target(nome),
ADD FOREIGN KEY (damage_class) REFERENCES move_damage_class(nome),
ADD FOREIGN KEY (contest_effect) REFERENCES contest_effect(id);

ALTER TABLE movimento_meta
ADD FOREIGN KEY (movimento_id) REFERENCES movimento(id);

ALTER TABLE movimento_past_values
ADD FOREIGN KEY (movimento_id) REFERENCES movimento(id);
 
ALTER TABLE item_segurado
ADD FOREIGN KEY (item_id) REFERENCES item(id),
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id);

ALTER TABLE pokemon_habilidade
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
ADD FOREIGN KEY (habilidade_id) REFERENCES habilidade(id);

ALTER TABLE pokemon_habilidade_antiga
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
ADD FOREIGN KEY (habilidade_id) REFERENCES habilidade(id);

ALTER TABLE habilidade_effect_entry
ADD FOREIGN KEY (habilidade_id) REFERENCES habilidade(id);

ALTER TABLE habilidade_flavor_text_entry
ADD FOREIGN KEY (habilidade_id) REFERENCES habilidade(id);

ALTER TABLE move_effect_entry
ADD FOREIGN KEY (move_id) REFERENCES movimento(id);

ALTER TABLE move_flavor_text_entry
ADD FOREIGN KEY (move_id) REFERENCES movimento(id);

ALTER TABLE contest_combo
ADD FOREIGN KEY (first_move_id) REFERENCES movimento(id),
ADD FOREIGN KEY (second_move_id) REFERENCES movimento(id);

ALTER TABLE pokemon_stat
ADD FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
ADD FOREIGN KEY (stat_id) REFERENCES stat(id);

ALTER TABLE modifica
ADD FOREIGN KEY (movimento_id) REFERENCES movimento(id),
ADD FOREIGN KEY (stat_id) REFERENCES stat(id);

ALTER TABLE stat
ADD FOREIGN KEY (damage_class) REFERENCES move_damage_class(nome);

ALTER TABLE caracteristica
ADD FOREIGN KEY (stat_id) REFERENCES stat(id);

ALTER TABLE nature
ADD FOREIGN KEY (stat_diminuido_id) REFERENCES stat(id),
ADD FOREIGN KEY (stat_aumentado_id) REFERENCES stat(id),
ADD FOREIGN KEY (likes_flavor_id) REFERENCES flavor(id);

ALTER TABLE pokeathlon_stat_change
ADD FOREIGN KEY (nature_id) REFERENCES nature(id);

ALTER TABLE battle_style_preference
ADD FOREIGN KEY (nature_id) REFERENCES nature(id),
ADD FOREIGN KEY (battle_style_id) REFERENCES move_battle_style(id);

ALTER TABLE berry
ADD FOREIGN KEY (item_id) REFERENCES item(id);

ALTER TABLE berry_flavor
ADD FOREIGN KEY (berry_id) REFERENCES berry(id),
ADD FOREIGN KEY (flavor_id) REFERENCES flavor(id);

ALTER TABLE machine
ADD FOREIGN KEY (item_id) REFERENCES item(id),
ADD FOREIGN KEY (movimento_id) REFERENCES movimento(id);

ALTER TABLE item_flavor_text_entry
ADD FOREIGN KEY (item_id) REFERENCES item(id);

ALTER TABLE item_effect_entry
ADD FOREIGN KEY (item_id) REFERENCES item(id);

ALTER TABLE item_game_index
ADD FOREIGN KEY (item_id) REFERENCES item(id);

ALTER TABLE item_atributo
ADD FOREIGN KEY (item_id) REFERENCES item(id),
ADD FOREIGN KEY (atributo_id) REFERENCES atributo(id);