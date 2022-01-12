import $ from "jquery";

var $mainContainer = $("#lama");

/* set back ground for lama */
var $bgLama = $("div.lama-bg:first", $mainContainer);
$bgLama.css("background-image", 'url("' + $bgLama.data("bg") + '")');

/* l'affectation du bg au block */
var skinPartSetBg = function ($element, partName, currentSkinPart) {
  if (
    currentSkinPart == 0 ||
    typeof lamaParts == "undefined" ||
    typeof lamaParts[partName] == "undefined" ||
    typeof lamaParts[partName]["elements"][currentSkinPart - 1] == "undefined"
  ) {
    $element.css("background-image", "none");
    return 0;
  }
  $element.css(
    "background-image",
    'url("' + lamaParts[partName]["elements"][currentSkinPart - 1] + '")'
  );
  return currentSkinPart;
};

/* l'action lors du click sur une partie de lama skinnable */
var onSkinPartClick = function () {
  var $this = $(this);
  var partName = $this.data("lama-part");
  lamaParts[partName]["index"] = skinPartSetBg(
    $this,
    partName,
    lamaParts[partName]["index"] + 1
  );
  onSkinPartChange();
};

const letters = [
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
/* maj de l'url suite à un changement */
var onSkinPartChange = function () {
  var hashToSet = "";
  for (const partName in lamaParts) {
    hashToSet = hashToSet + letters[lamaParts[partName]["index"]];
  }
  console.log(hashToSet);
  history.pushState(hashToSet, "Custom lama", "lama-" + hashToSet);
};

/* parcours des parties de lama à ajouter */
$("div.part", $mainContainer).each(function (event) {
  var $this = $(this);
  var partName = $this.data("lama-part");
  if (
    typeof lamaParts == "undefined" ||
    typeof lamaParts[partName] == "undefined"
  ) {
    return;
  }
  var currentSkinPart = (lamaParts[partName]["currentIndex"] = 0);
  // le nombre d'image possible (index: donc nbr-1)
  lamaParts[partName]["maxIndex"] = lamaParts[partName]["elements"].length - 1;

  // ajout de la classe qui gere le positionnement
  $this.addClass("lama-part-" + partName);

  // mise en place du background initial
  lamaParts[partName]["index"] = skinPartSetBg(
    $this,
    partName,
    currentSkinPart
  );

  $this.on("click", onSkinPartClick);
});

/* re-set current lama from hash */
var setSkinParts = function (hash) {
  if (hash == null) {
    for (const partName in lamaParts) {
      hash = letters[0];
    }
  }
  var letterToParse;
  var indexToSet;
  var i = 0;
  for (const partName in lamaParts) {
    if (i >= hash.length) {
      letterToParse = "0";
    } else {
      letterToParse = hash.charAt(i);
    }
    indexToSet = Math.max(0, letters.indexOf(letterToParse));
    if (
      indexToSet == lamaParts[partName]["index"] ||
      indexToSet >= lamaParts[partName]["elements"].length
    ) {
      i++;
      continue;
    }

    lamaParts[partName]["index"] = skinPartSetBg(
      $(".lama-part-" + partName, $mainContainer),
      partName,
      indexToSet
    );
    i++;
  }
};

setSkinParts(currentHash);
if (currentHash.length) {
  history.replaceState(currentHash, "Custom lama", "lama-" + currentHash);
}

window.onpopstate = function (event) {
  setSkinParts(event.state);
};
