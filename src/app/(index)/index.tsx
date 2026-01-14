import { bikeRoutes, SF_CENTER } from '@/data/bike-routes';
import * as AppleColors from '@bacons/apple-colors';
import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import MapView, { Polyline, Marker, PROVIDER_DEFAULT } from 'react-native-maps';

export default function IndexRoute() {
  const [selectedRoute, setSelectedRoute] = useState(bikeRoutes[0]);
  const { height } = useWindowDimensions();

  const difficultyColors = {
    Easy: AppleColors.systemGreen,
    Moderate: AppleColors.systemOrange,
    Hard: AppleColors.systemRed,
  };

  return (
    <View style={{ flex: 1, backgroundColor: AppleColors.systemBackground }}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={{ width: '100%', height: height * 0.45 }}
        initialRegion={{
          latitude: SF_CENTER.latitude,
          longitude: SF_CENTER.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {bikeRoutes.map((route) => (
          <Polyline
            key={route.id}
            coordinates={route.coordinates}
            strokeColor={
              route.id === selectedRoute.id
                ? AppleColors.systemBlue
                : AppleColors.systemGray
            }
            strokeWidth={route.id === selectedRoute.id ? 4 : 2}
          />
        ))}
        {selectedRoute.coordinates.length > 0 && (
          <Marker coordinate={selectedRoute.coordinates[0]} pinColor={AppleColors.systemBlue} />
        )}
      </MapView>

      <ScrollView
        style={{ flex: 1 }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ padding: 16, gap: 12 }}
      >
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: AppleColors.label,
              marginBottom: 4,
            }}
          >
            {selectedRoute.name}
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginBottom: 12 }}>
            <View
              style={{
                backgroundColor: difficultyColors[selectedRoute.difficulty] + '20',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: difficultyColors[selectedRoute.difficulty],
                  fontWeight: '600',
                  fontSize: 13,
                }}
              >
                {selectedRoute.difficulty}
              </Text>
            </View>
            <Text style={{ color: AppleColors.secondaryLabel, fontSize: 15 }}>
              {selectedRoute.distance}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: AppleColors.secondaryLabel,
              lineHeight: 22,
              marginBottom: 16,
            }}
          >
            {selectedRoute.description}
          </Text>

          <Text
            style={{
              fontSize: 17,
              fontWeight: '600',
              color: AppleColors.label,
              marginBottom: 8,
            }}
          >
            Highlights
          </Text>
          {selectedRoute.highlights.map((highlight, index) => (
            <Text
              key={index}
              style={{
                fontSize: 15,
                color: AppleColors.secondaryLabel,
                marginBottom: 4,
              }}
            >
              • {highlight}
            </Text>
          ))}
        </View>

        <View style={{ marginTop: 12 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: AppleColors.label,
              marginBottom: 12,
            }}
          >
            All Routes
          </Text>
          <View style={{ gap: 10 }}>
            {bikeRoutes.map((route) => (
              <TouchableOpacity
                key={route.id}
                onPress={() => setSelectedRoute(route)}
                style={{
                  backgroundColor:
                    route.id === selectedRoute.id
                      ? AppleColors.systemBlue + '15'
                      : AppleColors.secondarySystemBackground,
                  padding: 16,
                  borderRadius: 12,
                  borderCurve: 'continuous',
                  borderWidth: route.id === selectedRoute.id ? 2 : 0,
                  borderColor: AppleColors.systemBlue,
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: AppleColors.label,
                        marginBottom: 4,
                      }}
                    >
                      {route.name}
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                      <Text style={{ color: AppleColors.secondaryLabel, fontSize: 14 }}>
                        {route.distance}
                      </Text>
                      <Text style={{ color: AppleColors.tertiaryLabel }}>•</Text>
                      <Text
                        style={{
                          color: difficultyColors[route.difficulty],
                          fontSize: 14,
                          fontWeight: '500',
                        }}
                      >
                        {route.difficulty}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
