import * as t44ms from "typescript-44ms";
import * as Service from "typescript-44ms-reactionary-template-method";

interface Employee {
  subscriber: Service.Work;
  whereAmI?: t44ms.Api.ref;
}

export const ootbServiceController: Service.FactoryServiceController = (
  publicFormState,
  formRefStack
) => {
  const [formRefs] = formRefStack;

  let employees: Employee[] = [];
  const employee: Service.ServiceClient["employee"] = (
    subscriber: Service.Work,
    whereAmI?: t44ms.Api.ref
  ) => {
    const thisSubscriber: Employee = {
      subscriber,
      whereAmI,
    };
    employees = [...employees, ...[thisSubscriber]];

    const unsubscribing = () => {
      employees = employees.filter(
        (subscriber) => subscriber !== thisSubscriber
      );
    };
    const considerations: Service.ServiceClientExplorerConsiderations = {
      unsubscribing,
    };
    return considerations;
  };
  const work_required_here_forAnEmployee: Service.ServiceController["work_required_here"] =
    (ref_lhs) => {
      interface Match {
        subscriber: Employee;
        howMuchOfAMatch: number;
      }
      let matches: Match[] = [];
      const ref_lhs_components = ref_lhs[t44ms.Api.RefSymbol].split(".");
      employees.forEach((subscriber) => {
        const { whereAmI: ref_rhs } = subscriber;
        const ref_rhs_components = (ref_rhs || (formRefs as t44ms.Api.ref))[
          t44ms.Api.RefSymbol
        ].split(".");

        let matchScore = 0;
        let hasTheChainBeenBroken = false;
        ref_lhs_components.forEach((ref_lhs_atom) => {
          if (hasTheChainBeenBroken) return;
          const ref_rhs_atom = ref_rhs_components.shift();
          if (ref_lhs_atom === "" || ref_rhs_atom === "") {
            const areTheseBothRootAndTheSame =
              ref_lhs_atom === "" && ref_rhs_atom === "";
            if (!areTheseBothRootAndTheSame) {
              hasTheChainBeenBroken = true;
              return;
            }
          } else if (ref_lhs_atom !== ref_rhs_atom) {
            hasTheChainBeenBroken = true;
            return;
          }
          matchScore = matchScore + 1;
        });

        if (matchScore > 0) {
          const match: Match = {
            subscriber,
            howMuchOfAMatch: matchScore,
          };
          matches = [...matches, match];
        }
      });

      const sortedMatches = matches.sort((a, b) => {
        return b.howMuchOfAMatch - a.howMuchOfAMatch;
      });

      const mostSpecificMatch = sortedMatches[0];
      if (!mostSpecificMatch) {
        return;
      }
      const allTheSpecificMatches = sortedMatches.filter(
        (match) => match.howMuchOfAMatch === mostSpecificMatch.howMuchOfAMatch
      );
      allTheSpecificMatches.forEach((theMatch) => {
        theMatch.subscriber.subscriber();
      });
    };

  let employeesWhoProduce: Employee[] = [];
  const employMeAsAProducer: Service.ServiceClient["employMeAsAProducer"] = (
    subscriber: Service.Work,
    whereAmI?: t44ms.Api.ref
  ) => {
    const thisSubscriber: Employee = {
      subscriber,
      whereAmI,
    };
    employeesWhoProduce = [...employeesWhoProduce, ...[thisSubscriber]];

    const unsubscribing = () => {
      employeesWhoProduce = employeesWhoProduce.filter(
        (subscriber) => subscriber !== thisSubscriber
      );
    };
    const considerations: Service.ServiceClientExplorerConsiderations = {
      unsubscribing,
    };
    return considerations;
  };
  const work_required_here_forAnEmployeeWhoProduces: Service.ServiceController["work_required_here"] =
    (ref_lhs) => {
      interface Match {
        subscriber: Employee;
        howMuchOfAMatch: number;
      }
      let matches: Match[] = [];
      const ref_lhs_components = ref_lhs[t44ms.Api.RefSymbol].split(".");
      employeesWhoProduce.forEach((subscriber) => {
        const { whereAmI: ref_rhs } = subscriber;
        const ref_rhs_components = (ref_rhs || (formRefs as t44ms.Api.ref))[
          t44ms.Api.RefSymbol
        ].split(".");

        let matchScore = 0;
        let hasTheChainBeenBroken = false;
        ref_lhs_components.forEach((ref_lhs_atom) => {
          if (hasTheChainBeenBroken) return;
          const ref_rhs_atom = ref_rhs_components.shift();
          if (ref_lhs_atom === "" || ref_rhs_atom === "") {
            const areTheseBothRootAndTheSame =
              ref_lhs_atom === "" && ref_rhs_atom === "";
            if (!areTheseBothRootAndTheSame) {
              hasTheChainBeenBroken = true;
              return;
            }
          } else if (ref_lhs_atom !== ref_rhs_atom) {
            hasTheChainBeenBroken = true;
            return;
          }
          matchScore = matchScore + 1;
        });

        if (matchScore > 0) {
          const match: Match = {
            subscriber,
            howMuchOfAMatch: matchScore,
          };
          matches = [...matches, match];
        }
      });

      const sortedMatches = matches.sort((a, b) => {
        return b.howMuchOfAMatch - a.howMuchOfAMatch;
      });

      const mostSpecificMatch = sortedMatches[0];
      if (!mostSpecificMatch) {
        return;
      }
      const allTheSpecificMatches = sortedMatches.filter(
        (match) => match.howMuchOfAMatch === mostSpecificMatch.howMuchOfAMatch
      );
      allTheSpecificMatches.forEach((theMatch) => {
        theMatch.subscriber.subscriber();
      });
    };

  interface ExplorerSubscriber<
    YourFormStateDescribingInterfaceType extends any
  > {
    subscriber: (latest: YourFormStateDescribingInterfaceType | null) => void;
    whereAmI?: t44ms.Api.ref;
  }
  let explorerSubscribers: ExplorerSubscriber<any>[] = [];
  const explore: Service.ServiceClient["explore"] = <
    YourFormStateDescribingInterfaceType extends any
  >(
    subscriber: (latest: YourFormStateDescribingInterfaceType | null) => void,
    whereAmI?: t44ms.Api.ref
  ): Service.ServiceClientExplorerConsiderations => {
    const thisSubscriber: ExplorerSubscriber<YourFormStateDescribingInterfaceType> =
      {
        subscriber,
        whereAmI,
      };
    explorerSubscribers = [...explorerSubscribers, ...[thisSubscriber]];

    public_form_state_ready(whereAmI || (formRefs as t44ms.Api.ref));

    const unsubscribing = () => {
      explorerSubscribers = explorerSubscribers.filter(
        (subscriber) => subscriber !== thisSubscriber
      );
    };
    const considerations: Service.ServiceClientExplorerConsiderations = {
      unsubscribing,
    };
    return considerations;
  };

  interface ExploreFulfillmentSubscriber<
    YourFormStateDescribingInterfaceType extends any
  > {
    subscriber: (latest: YourFormStateDescribingInterfaceType | null) => void;
    whereAmI?: t44ms.Api.ref;
  }
  let exploreFulfillmentSubscribers: ExploreFulfillmentSubscriber<any>[] = [];
  const exploreFulfillment: Service.ServiceClient["exploreFulfillment"] = <
    YourExpectedControllerInterfaceThatLivesAtThatRef extends any
  >(
    subscriber: (
      latest: YourExpectedControllerInterfaceThatLivesAtThatRef | null
    ) => void,
    whereAmI?: t44ms.Api.ref
  ): Service.ServiceClientExplorerConsiderations => {
    const thisSubscriberOnFulfillment: ExploreFulfillmentSubscriber<YourExpectedControllerInterfaceThatLivesAtThatRef> =
      {
        subscriber,
        whereAmI,
      };
    exploreFulfillmentSubscribers = [
      ...exploreFulfillmentSubscribers,
      ...[thisSubscriberOnFulfillment],
    ];

    public_form_fulfillment_ready(whereAmI || (formRefs as t44ms.Api.ref));

    const unsubscribing = () => {
      exploreFulfillmentSubscribers = exploreFulfillmentSubscribers.filter(
        (subscriber) => subscriber !== thisSubscriberOnFulfillment
      );
    };
    const considerations: Service.ServiceClientExplorerConsiderations = {
      unsubscribing,
    };
    return considerations;
  };

  const publicFulfillmentIslandNow = <
    YourExpectedControllerInterfaceThatLivesAtThatRef extends any
  >(
    ref: t44ms.Api.ref
  ): YourExpectedControllerInterfaceThatLivesAtThatRef | null => {
    const literalCallstack = ref[t44ms.Api.RefSymbol].split(".");
    let node = publicFormState.publicFulfillmentImmediate();
    literalCallstack.forEach((name) => {
      if (name && name.length > 0) {
        node = node?.[name];
      }
    });
    return node as YourExpectedControllerInterfaceThatLivesAtThatRef | null;
  };

  const work_required_here: Service.ServiceController["work_required_here"] = (
    ref_lhs
  ) => {
    work_required_here_forAnEmployee(ref_lhs);
    work_required_here_forAnEmployeeWhoProduces(ref_lhs);
  };
  const public_form_state_ready: Service.ServiceController["public_form_state_ready"] =
    (ref_lhs) => {
      interface Match {
        subscriber: ExplorerSubscriber<any>;
        howMuchOfAMatch: number;
      }
      let matches: Match[] = [];
      const ref_lhs_components = ref_lhs[t44ms.Api.RefSymbol].split(".");
      explorerSubscribers.forEach((subscriber) => {
        const { whereAmI: ref_rhs } = subscriber;
        const ref_rhs_components = (ref_rhs || (formRefs as t44ms.Api.ref))[
          t44ms.Api.RefSymbol
        ].split(".");

        let matchScore = 0;
        let hasTheChainBeenBroken = false;
        ref_lhs_components.forEach((ref_lhs_atom) => {
          if (hasTheChainBeenBroken) return;
          const ref_rhs_atom = ref_rhs_components.shift();

          const ref_lhs_atom__isRoot = ref_lhs_atom.length < 1;
          const ref_rhs_atom__isRoot = (ref_rhs_atom?.length || 0) < 1;
          if (ref_lhs_atom__isRoot || ref_rhs_atom__isRoot) {
            const areTheseBothTheRootAndTheSame =
              ref_lhs_atom__isRoot && ref_rhs_atom__isRoot;
            if (!areTheseBothTheRootAndTheSame) {
              hasTheChainBeenBroken = true;
              return;
            }
          } else {
            if (ref_lhs_atom !== ref_rhs_atom) {
              hasTheChainBeenBroken = true;
              return;
            }
          }

          matchScore = matchScore + 1;
        });

        if (matchScore > 0) {
          const match: Match = {
            subscriber,
            howMuchOfAMatch: matchScore,
          };
          matches = [...matches, match];
        }
      });

      const sortedMatches = matches.sort((a, b) => {
        return b.howMuchOfAMatch - a.howMuchOfAMatch;
      });

      const mostSpecificMatch = sortedMatches[0];
      if (!mostSpecificMatch) {
        return;
      }
      const allTheSpecificMatches = sortedMatches.filter(
        (match) => match.howMuchOfAMatch === mostSpecificMatch.howMuchOfAMatch
      );
      allTheSpecificMatches.forEach((theMatch) => {
        const yourFormState = Service.publicFormAccess(
          publicFormState.publicFormStateImmediate(),
          theMatch.subscriber.whereAmI || (formRefs as t44ms.Api.ref)
        );
        theMatch.subscriber.subscriber(yourFormState);
      });
    };
  const public_form_fulfillment_ready: Service.ServiceController["public_form_fulfillment_ready"] =
    (ref_lhs) => {
      interface Match {
        subscriber: ExploreFulfillmentSubscriber<any>;
        howMuchOfAMatch: number;
      }
      let matches: Match[] = [];
      const ref_lhs_components = ref_lhs[t44ms.Api.RefSymbol].split(".");
      exploreFulfillmentSubscribers.forEach((subscriber) => {
        const { whereAmI: ref_rhs } = subscriber;
        const ref_rhs_components = (ref_rhs || (formRefs as t44ms.Api.ref))[
          t44ms.Api.RefSymbol
        ].split(".");

        let matchScore = 0;
        let hasTheChainBeenBroken = false;
        ref_lhs_components.forEach((ref_lhs_atom) => {
          if (hasTheChainBeenBroken) return;
          const ref_rhs_atom = ref_rhs_components.shift();

          const ref_lhs_atom__isRoot = ref_lhs_atom.length < 1;
          const ref_rhs_atom__isRoot = (ref_rhs_atom?.length || 0) < 1;
          if (ref_lhs_atom__isRoot || ref_rhs_atom__isRoot) {
            const areTheseBothTheRootAndTheSame =
              ref_lhs_atom__isRoot && ref_rhs_atom__isRoot;
            if (!areTheseBothTheRootAndTheSame) {
              hasTheChainBeenBroken = true;
              return;
            }
          } else {
            if (ref_lhs_atom !== ref_rhs_atom) {
              hasTheChainBeenBroken = true;
              return;
            }
          }

          matchScore = matchScore + 1;
        });

        if (matchScore > 0) {
          const match: Match = {
            subscriber,
            howMuchOfAMatch: matchScore,
          };
          matches = [...matches, match];
        }
      });

      const sortedMatches = matches.sort((a, b) => {
        return b.howMuchOfAMatch - a.howMuchOfAMatch;
      });

      const mostSpecificMatch = sortedMatches[0];
      if (!mostSpecificMatch) {
        return;
      }
      const allTheSpecificMatches = sortedMatches.filter(
        (match) => match.howMuchOfAMatch === mostSpecificMatch.howMuchOfAMatch
      );
      allTheSpecificMatches.forEach((theMatch) => {
        const yourFormState = publicFulfillmentIslandNow(
          theMatch.subscriber.whereAmI || (formRefs as t44ms.Api.ref)
        );
        theMatch.subscriber.subscriber(yourFormState);
      });
    };

  const serviceController: Service.ServiceController = {
    work_required_here,
    public_form_state_ready,
    public_form_fulfillment_ready,
  };

  return [
    serviceController,
    explore,
    exploreFulfillment,
    employee,
    employMeAsAProducer,
  ];
};
