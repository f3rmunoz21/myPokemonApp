// tslint:disable: variable-name
// tslint:disable: class-name

export class Pokemon {

  public static typeMap: Map<string, string> = new Map([
    ["fire", "local_fire_department"],
    ["water", "water_drop"],
    ["electric", "bolt"],
    ["grass", "grass" ],
    ["bug", "pest_control" ],
    ["ice", "view_in_ar" ]

  ]);
  abilities?: (AbilitiesEntity)[] | null;
  base_experience: number;
  forms?: (AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies)[] | null;
  game_indices?: (GameIndicesEntity)[] | null;
  height: number;
  held_items?: (HeldItemsEntity)[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: (MovesEntity)[] | null;
  name: string;
  order: number;
  past_types?: (null)[] | null;
  species: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  sprites: Sprites;
  stats: (StatsEntity)[] | null;
  types?: (TypesEntity)[] | null;
  weight: number;

  public get typeList(): string {
    const typeArray: string[] = [];
    this.types.forEach(o => typeArray.push(o.type.name));
    return typeArray.join('/');
  }

  public get statsList(): string {
    const statsArray: string[] = [];
    this.stats.forEach(o => statsArray.push(o.stat.name));
    return statsArray.join(':');
  }


  public get movesList(): string {
    const movesArray: string[] = [];
    this.moves.forEach(o => movesArray.push(o.move.name));
    return movesArray.join(', ');
  }

  public get startingGen(): string {
    return this.sprites.versions['generation-i']
    ? 'Gen 1'
    : this.sprites.versions['generation-ii']
    ? 'Gen 2'
    : this.sprites.versions['generation-iii']
    ? 'Gen 3'
    : this.sprites.versions['generation-iv']
    ? 'Gen 4'
    : this.sprites.versions['generation-v']
    ? 'Gen 5'
    : this.sprites.versions['generation-vi']
    ? 'Gen 6'
    : this.sprites.versions['generation-vii']
    ? 'Gen 7'
    : this.sprites.versions['generation-viii']
    ? 'Gen 8'
    : 'U/A';
  }

  public get isCurrentGen(): boolean {
    return this.sprites.versions['generation-viii'] ? true : false;
  }

  public get typeIcons(): string[] {
    const typeArray: string[] = [];
    this.types.forEach(o => typeArray.push(o.type.name));
    const returnArray: string[] = [];
    typeArray.forEach(x => returnArray.push(Pokemon.typeMap.get(x) ?? "help"));
    return returnArray;
  }

  constructor(init: Partial<Pokemon>) {
    Object.assign(this, init);
  }
}

console.log();


export interface AbilitiesEntity {
  ability: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  is_hidden: boolean;
  slot: number;
}

export interface AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
  name: string;
  url: string;
}

export interface GameIndicesEntity {
  game_index: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}

export interface HeldItemsEntity {
  item: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_details?: (VersionDetailsEntity)[] | null;
}

export interface VersionDetailsEntity {
  rarity: number;
  version: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}

export interface MovesEntity {
  move: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group_details?: (VersionGroupDetailsEntity)[] | null;
}

export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: Versions;
}

export interface Other {
  dream_world: DreamWorldOrIcons;
  'official-artwork': Official_artwork;
}

export interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}

export interface Official_artwork {
  front_default: string;
}

export interface Versions {
  'generation-i': Generation_i;
  'generation-ii': Generation_ii;
  'generation-iii': Generation_iii;
  'generation-iv': Generation_iv;
  'generation-v': Generation_v;
  'generation-vi': Generation_vi;
  'generation-vii': Generation_vii;
  'generation-viii': Generation_viii;
}

export interface Generation_i {
  'red-blue': RedBlueYellow;
  yellow: RedBlueYellow;
}

export interface RedBlueYellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface Generation_ii {
  crystal: CrystalGoldSilverFireRedLeafGreenRubySapphire;
  gold: CrystalGoldSilverFireRedLeafGreenRubySapphire;
  silver: CrystalGoldSilverFireRedLeafGreenRubySapphire;
}

export interface CrystalGoldSilverFireRedLeafGreenRubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Generation_iii {
  emerald: Emerald;
  'firered-leafgreen': CrystalGoldSilverFireRedLeafGreenRubySapphire;
  'ruby-sapphire': CrystalGoldSilverFireRedLeafGreenRubySapphire;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface Generation_iv {
  'diamond-pearl': DiamondPearlHeartGoldSoulSilverPlatinumAnimated;
  'heartgold-soulsilver': DiamondPearlHeartGoldSoulSilverPlatinumAnimated;
  'platinum': DiamondPearlHeartGoldSoulSilverPlatinumAnimated;
}

export interface DiamondPearlHeartGoldSoulSilverPlatinumAnimated {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Generation_v {
  'black-white': BlackWhite;
}

export interface BlackWhite {
  animated: DiamondPearlHeartGoldSoulSilverPlatinumAnimated;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Generation_vi {
  'omegaruby-alphasapphire': OmegaRubyAlphaSapphireXYUltraSunUltraMoon;
  'x-y': OmegaRubyAlphaSapphireXYUltraSunUltraMoon;
}

export interface OmegaRubyAlphaSapphireXYUltraSunUltraMoon {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Generation_vii {
  icons: DreamWorldOrIcons;
  'ultra-sun-ultra-moon': OmegaRubyAlphaSapphireXYUltraSunUltraMoon;
}

export interface Generation_viii {
  icons: Icons;
}

export interface Icons {
  front_default: string;
  front_female: string;
}

export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}

export interface TypesEntity {
  slot: number;
  type: AbilityOrFormsEntityOrVersionOrItemOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
