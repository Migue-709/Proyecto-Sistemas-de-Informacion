# Demonspawn Changes Report

## Overview
This report documents all changes related to **Demonspawn** in the Dungeon Crawl Stone Soup (DCSS) repository since version 0.33.1 (released June 6, 2025). These changes are part of the development version heading towards version 0.34.

---

## Summary of Changes

A total of **14 commits** were identified that contain Demonspawn-related changes. These can be categorized as follows:

- **Bug Fixes**: 3 commits
- **Balance Changes / Nerfs**: 2 commits
- **New Features**: 1 commit
- **Code Refactoring**: 2 commits
- **Vault/Level Design Updates**: 5 commits
- **Documentation Updates**: 1 commit

---

## Detailed Commit Analysis

### 1. Fix protean grace description including demonspawn mutations (Bamboolord)
**Commit:** `48bd0ad4f3`  
**Date:** October 9, 2025  
**Author:** DracoOmega

**Change Description:**
- Fixed the Protean Grace mutation description to correctly exclude demonspawn innate mutations from the calculation
- The A screen (abilities screen) was accurate, but the description text was not reflecting the actual bonus granted
- Changed the lua call from `you.how_mutated(true, true, false, true, false)` to `you.how_mutated(true, false, false, true, false)`

**Files Changed:**
- `crawl-ref/source/dat/descript/mutations.txt`

---

### 2. Refactor to fix issues with player::how_mutated()
**Commit:** `fd47f0a967`  
**Date:** September 27, 2025  
**Author:** DracoOmega

**Change Description:**
This was a critical bug fix that addressed several issues affecting Demonspawn players:

- **Critical Bug Fixed:** Code from 11 years ago (b9f27a8) caused `how_mutated()` to return extremely negative numbers for any Demonspawn with Ru sacrifices (because the code to subtract sacrifices was inside the mutation iteration loop)

**Issues caused by this bug for Demonspawn:**
1. Silver weapons did no additional damage to them (regardless of mutation count)
2. Diminishing returns on normal mutations never triggered
3. Huge negative EV and Slaying if they had Protean Grace mutation

**Changes made:**
- Refactored `how_mutated()` function parameters to properly distinguish between silver-affecting mutations and innate mutations
- Demonspawn innate mutations now properly count for silver vulnerability
- Ru sacrifices are correctly excluded from silver vulnerability calculation for Demonspawn
- Added new `has_any_mutations()` helper function
- Makhleb marks now correctly count for silver vulnerability

**Files Changed:**
- `crawl-ref/source/beam.cc`
- `crawl-ref/source/chardump.cc`
- `crawl-ref/source/dat/descript/mutations.txt`
- `crawl-ref/source/hints.cc`
- `crawl-ref/source/l-you.cc`
- `crawl-ref/source/mutation.cc`
- `crawl-ref/source/mutation.h`
- `crawl-ref/source/player.h`

---

### 3. Don't offer Sac Will to base draconians
**Commit:** `0e87efbab1`  
**Date:** June 20, 2025  
**Author:** DracoOmega

**Change Description:**
- Prevents Ru from offering Sacrifice Will to base draconians (since they might become purple draconians and conflict)
- **Demonspawn Relevance:** The commit message notes this is similar to existing behavior for frail and robust demonspawn mutations

**Files Changed:**
- `crawl-ref/source/god-abil.cc`
- `crawl-ref/source/species.cc`

---

### 4. Allow monsters to use Hurl Torchlight
**Commit:** `8504f31491`  
**Date:** (Not specified in diff)  
**Author:** DracoOmega

**Change Description:**
- Allows monsters to use the Hurl Torchlight spell
- **Demonspawn Relevance:** Mentioned that this spell is planned to be given to a "Yred-worshipping demonspawn in Pan" in the future
- Changed the spell from "never hurt the user" to "never hurt Yred worshippers" for symmetry with Cleansing Flame

---

### 5. Adjust a few more positive mutations
**Commit:** `3b6f53f83a`  
**Date:** May 6, 2025  
**Author:** regret-index

**Change Description:**
Multiple mutation adjustments with Demonspawn relevance:

1. **Fur mutation removal for most species:**
   - Removed Fur mutation from non-Felid/Troll species
   - Previously, Demonspawn could get this mutation (along with scales)
   - The commit notes: "We removed a lot of scales from non-demonspawn as part of simplifications"

2. **Passive Mapping mutation compressed:**
   - Reduced from 3 levels to 2 levels
   - Mentioned in context of Jiyva/Demonspawn mutation variety

**Files Changed:**
- `crawl-ref/source/mutation.cc`
- `crawl-ref/source/mutation-data.h`
- Various species YAML files

---

### 6. New mutation: Protean Grace (+Dam & +EV scaled to non-innate mutation count)
**Commit:** `a229ff6502`  
**Date:** April 30, 2025  
**Author:** regret-index

**Change Description:**
Added a new rare positive mutation "Protean Grace" with significant Demonspawn implications:

- **Effect:** Grants +1 EV and +1 Slaying per non-innate mutation
- **Soft cap:** Past 7 mutations, bonus is halved (every other mutation counts)
- **Explicitly designed for Demonspawn:** The commit states "If nothing else, it'll at least be quite exciting, especially for demonspawn and Makhleb worshippers"

**What counts:**
- Demonspawn mutations (innate)
- Jiyva/Xom gifts
- Makhleb destruction flavours + Marks

**What doesn't count:**
- Species traits
- Form attributes
- Ru sacrifices

**Files Changed:**
- `crawl-ref/source/dat/descript/mutations.txt`
- `crawl-ref/source/mutation-data.h`
- `crawl-ref/source/mutation-type.h`
- `crawl-ref/source/mutation.cc`
- `crawl-ref/source/mutation.h`
- `crawl-ref/source/player.cc`
- New tile: `protean_grace.png`

---

### 7. Nerf protean grace
**Commit:** `ad136e9815`  
**Date:** November 26, 2025  
**Author:** regret-index

**Change Description:**
Nerfed the Protean Grace mutation:

- **Previous behavior:** +1 EV and +1 Slaying per mutation, soft cap at 7 (halved scaling after)
- **New behavior:** Every 2 mutations (rounded up) provides +1 EV and +1 Slaying

**Demonspawn Relevance:**
- This nerf was partially motivated by Demonspawn's high mutation counts
- The original soft cap was specifically described as "for Xom, Jiyva, and Demonspawn"
- Now the halving applies universally from the start

**Files Changed:**
- `crawl-ref/source/dat/descript/mutations.txt`
- `crawl-ref/source/mutation.cc`
- `crawl-ref/source/player.cc`

---

### 8. Yet more catch-up vault review
**Commit:** `a086fab39d`  
**Date:** November 5, 2025  
**Author:** regret-index

**Change Description:**
- Added vault item definitions including a "Demonspawn wanderer" skeleton with associated loot
- Part of Necropolis subvault updates

**Vault Definition:**
```lua
kitem("L = demonspawn skeleton, any armour good_item, " ..
      "any weapon good_item / randbook / any misc, " ..
      "any book / any jewellery / any wand w:20 / any misc / " ..
      "gold / any scroll / any potion / nothing w:70, " ..
      "any book / any jewellery / any wand w:20 / any misc / " ..
      "gold / any scroll / any potion / nothing w:70")
```

---

### 9. Remove the need to keep data for fully removed mutations
**Commit:** `e3d82ba608`  
**Date:** November 15, 2025  
**Author:** DracoOmega

**Change Description:**
- Removed old save compatibility code for Demonspawn stochastic torment resistance mutation
- The old code (now removed) was:
```c++
#if TAG_MAJOR_VERSION == 34
// Save compatibility for old demonspawn mutation -- now deterministic
if (you.has_mutation(MUT_STOCHASTIC_TORMENT_RESISTANCE))
    hploss /= 2;
#endif
```
- This mutation was a Demonspawn-specific mutation that was changed to be deterministic in earlier versions

---

### 10. Arenasprint: more balance work, more tiles
**Commit:** `7b498173eb`  
**Date:** September 16, 2025  
**Author:** regret-index

**Change Description:**
Arena sprint balance changes involving Demonspawn monsters:

- Demonspawn monsters remain part of certain monster sets in arenasprint
- Added "demonspawn corrupter" to the "Just die already!" monster set
- Preserved demonspawn warmonger, soul scholar, corrupter, and blood saint in various sets

**Monster sets containing Demonspawn:**
```lua
"demonspawn warmonger / demonspawn soul scholar /
 demonspawn corrupter / demonspawn blood saint /
 brimstone fiend / ice fiend / tzitzimitl / hell sentinel"
```

---

### 11. Adjustments to zig sets
**Commit:** `c1aa15e374`  
**Date:** July 5, 2025  
**Author:** yrdzrfxndfvh

**Change Description:**
Ziggurat monster set adjustments:

**Chaos Set:** Added `demonspawn blood saint w:4` to the chaos ziggurat monster set
- New monsters alongside: zykzyl, kobold fleshcrafter

**Summoners Set:** Retained `demonspawn corrupter` in the summoners set

---

### 12. Revise derived-undead skeletons into uncommon Doom-spreading draugr
**Commit:** `98bede34cb`  
**Date:** (Not specified)  
**Author:** DracoOmega / regret-index

**Change Description:**
Major undead revision affecting Demonspawn representation:

- Converted various skeleton types (including demonspawn skeleton) to draugr
- In vault files, `demonspawn skeleton` references remain for specific item spawns
- The "species mock" altar function retains demonspawn handling
- Updated twisted.des vault to use demonspawn draugr variant

**Example change:**
```lua
"demonspawn " .. d .. " / tengu " .. d .. " / " ..  -- where d = "draugr ; mundane long sword | mundane mace"
```

---

### 13. First new vault review for 0.34
**Commit:** `4e6b4df7a2`  
**Date:** (Not specified)  
**Author:** regret-index

**Change Description:**
Vault updates including Demonspawn-related changes:

1. **Twisted arrival vault:** Changed demonspawn monster spawns (L glyph)
2. **Pandemonium vaults:** Retained demonspawn soul scholar, blood saint, corrupter, warmonger in various Pandemonium vault monster sets
3. **Negative energy ziggurat sets:** Retained `demonspawn soul scholar` in the negative energy themed ziggurat floors

---

### 14. Some last 0.33 changelog updates
**Commit:** `32d3af9efa`  
**Date:** (Before 0.33.1 release)  
**Author:** (Not specified)

**Change Description:**
Changelog documentation update mentioning Demonspawn:

- Listed new mutation icons including "demonspawn demonic touch" and "demonspawn weakness stinger"
- Part of the 0.33 version documentation

---

## Summary Statistics

| Category | Count |
|----------|-------|
| Bug Fixes | 3 |
| Balance Changes | 2 |
| New Features | 1 |
| Code Refactoring | 2 |
| Vault/Level Updates | 5 |
| Documentation | 1 |
| **Total** | **14** |

---

## Key Takeaways

1. **Critical Bug Fix:** A major 11-year-old bug affecting Demonspawn with Ru sacrifices was fixed, which was causing silver weapons to deal no extra damage and Protean Grace to give massive negative bonuses.

2. **Protean Grace Mutation:** A new mutation was added specifically designed to benefit Demonspawn, and was subsequently nerfed due to being too powerful.

3. **Vault Updates:** Multiple vault files were updated to include proper Demonspawn representation, particularly in:
   - Necropolis/Crypt areas
   - Pandemonium
   - Ziggurat monster sets
   - Arena sprint

4. **Legacy Code Cleanup:** Old Demonspawn-specific code (stochastic torment resistance) was removed as part of mutation system cleanup.

5. **Monster Representation:** Demonspawn monsters (warmonger, soul scholar, corrupter, blood saint) continue to be featured in various dungeon areas and special levels.

---

*Report generated: December 2025*  
*Repository: https://github.com/crawl/crawl*  
*Version range: 0.33.1 to current development (0.34-dev)*
